#!/usr/bin/env node
// Finds flaky CI jobs from public GitHub Actions data.
//
// A run on the default branch that failed on attempt 1 and passed on a later
// attempt, with the same commit, is a flake by definition: the code did not
// change, only the outcome did. This script counts which jobs caused those
// re-runs and what each re-run cost in wall-clock time.
//
// Usage: node flake-report.mjs <owner/repo> <workflow file or name> [branch] [runs]
// Needs the GitHub CLI (`gh`) logged in. Read-only. No dependencies.
import { execFileSync } from 'node:child_process'

const [repo, workflow, branch = 'master', maxRunsArg = '100'] = process.argv.slice(2)
if (!repo || !workflow) {
  console.error('usage: node flake-report.mjs <owner/repo> <workflow file or name> [branch] [runs]')
  process.exit(2)
}
const maxRuns = Number(maxRunsArg)

// The API sometimes drops a connection. Retry a few times before giving up.
function gh (path) {
  for (let attempt = 1; ; attempt++) {
    try {
      const out = execFileSync('gh', ['api', path], {
        encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'],
      })
      return JSON.parse(out)
    } catch (err) {
      if (attempt === 4) throw err
      execFileSync('sleep', [String(attempt * 2)])
    }
  }
}

function listRuns () {
  const runs = []
  for (let page = 1; runs.length < maxRuns; page++) {
    const res = gh(`repos/${repo}/actions/workflows/${encodeURIComponent(workflow)}/runs` +
      `?branch=${encodeURIComponent(branch)}&event=push&status=completed&per_page=100&page=${page}`)
    if (!res.workflow_runs.length) break
    runs.push(...res.workflow_runs)
  }
  return runs.slice(0, maxRuns)
}

function jobsOfAttempt (runId, attempt) {
  const jobs = []
  for (let page = 1; ; page++) {
    const res = gh(`repos/${repo}/actions/runs/${runId}/attempts/${attempt}/jobs?per_page=100&page=${page}`)
    jobs.push(...res.jobs)
    if (jobs.length >= res.total_count || !res.jobs.length) break
  }
  return jobs
}

// "e2e-tests (chrome, 7)" and "e2e-tests (chrome, 8)" are one job with shards.
// Group them so a flaky suite is not hidden across its shards.
export function jobGroup (name) {
  return name.replace(/\s*\(.*\)\s*$/, '').replace(/\s+\d+$/, '').trim()
}

const minutes = (a, b) => (new Date(b) - new Date(a)) / 60000

const runs = listRuns()
const flakyRuns = []
const byGroup = new Map()
let failedFinal = 0

for (const run of runs) {
  if (run.conclusion === 'failure') failedFinal++
  if (run.run_attempt < 2 || run.conclusion !== 'success') continue
  // Passed after a re-run of the same commit. Look at what failed before.
  const flaky = { id: run.id, sha: run.head_sha.slice(0, 8), url: run.html_url, attempts: run.run_attempt, jobs: [], lostMin: 0 }
  for (let attempt = 1; attempt < run.run_attempt; attempt++) {
    const jobs = jobsOfAttempt(run.id, attempt)
    const failed = jobs.filter(j => j.conclusion === 'failure')
    const started = jobs.map(j => j.started_at).filter(Boolean).sort()[0]
    const ended = jobs.map(j => j.completed_at).filter(Boolean).sort().at(-1)
    if (started && ended) flaky.lostMin += minutes(started, ended)
    for (const job of failed) {
      const step = (job.steps || []).find(s => s.conclusion === 'failure')
      flaky.jobs.push(job.name)
      const key = jobGroup(job.name)
      const g = byGroup.get(key) || { runs: new Set(), failures: 0, steps: new Map(), examples: [] }
      g.runs.add(run.id)
      g.failures++
      if (step) g.steps.set(step.name, (g.steps.get(step.name) || 0) + 1)
      if (g.examples.length < 2) g.examples.push(job.html_url)
      byGroup.set(key, g)
    }
  }
  flakyRuns.push(flaky)
}

const first = runs.at(-1)?.created_at?.slice(0, 10)
const last = runs[0]?.created_at?.slice(0, 10)
const pct = (n, d) => d ? `${(100 * n / d).toFixed(0)}%` : 'n/a'
const lost = flakyRuns.reduce((s, r) => s + r.lostMin, 0)

console.log(`# Flaky-job report: ${repo}, workflow "${workflow}", branch ${branch}`)
console.log()
console.log(`Sample: the last ${runs.length} completed push runs, ${first} to ${last}.`)
console.log()
console.log(`- Passed first time: ${runs.filter(r => r.run_attempt === 1 && r.conclusion === 'success').length} (${pct(runs.filter(r => r.run_attempt === 1 && r.conclusion === 'success').length, runs.length)})`)
console.log(`- **Passed only after a re-run of the same commit: ${flakyRuns.length} (${pct(flakyRuns.length, runs.length)})**`)
console.log(`- Ended as failed: ${failedFinal} (${pct(failedFinal, runs.length)})`)
const other = runs.filter(r => !['success', 'failure'].includes(r.conclusion)).length
console.log(`- Cancelled or skipped (usually replaced by a newer push): ${other} (${pct(other, runs.length)})`)
const decided = runs.length - other
console.log(`- Of the ${decided} runs that reached a verdict, ${pct(flakyRuns.length, decided)} needed a re-run to pass`)
console.log(`- Wall-clock time of the failed attempts: ${lost.toFixed(0)} minutes` +
  (flakyRuns.length ? `, ${(lost / flakyRuns.length).toFixed(0)} minutes per flaky run` : ''))
console.log()
console.log('## Jobs that failed and then passed on the same commit')
console.log()
console.log('| Job (shards grouped) | Flaky runs | Share of flaky runs | Failed job instances | Step that failed most | Example |')
console.log('|---|---|---|---|---|---|')
// Jobs whose name ends in "-result" only report the status of other jobs.
// They are listed separately so the real failing jobs come first.
const isRollup = name => /-result$/.test(name)
const all = [...byGroup.entries()].sort((a, b) => b[1].runs.size - a[1].runs.size)
const rows = [...all.filter(([n]) => !isRollup(n)), ...all.filter(([n]) => isRollup(n))]
for (const [name, g] of rows) {
  const topStep = [...g.steps.entries()].sort((a, b) => b[1] - a[1])[0]
  console.log(`| ${name}${isRollup(name) ? ' *(roll-up)*' : ''} | ${g.runs.size} | ${pct(g.runs.size, flakyRuns.length)} | ${g.failures} | ` +
    `${topStep ? `${topStep[0]} (${topStep[1]})` : 'n/a'} | [log](${g.examples[0]}) |`)
}
console.log()
console.log('## Flaky runs')
console.log()
for (const r of flakyRuns) {
  console.log(`- [${r.sha}](${r.url}): ${r.attempts} attempts, ${r.lostMin.toFixed(0)} min in failed attempts. Failed: ${[...new Set(r.jobs)].join('; ') || 'no failed job recorded (cancelled or infrastructure)'}`)
}
