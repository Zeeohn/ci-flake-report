# ci-flake-report

One script that finds flaky CI jobs from public GitHub Actions data.

**The idea.** A run on the default branch that fails on attempt 1 and passes on a later attempt, for the same commit, is a flake by definition. The code did not change. Only the outcome did. The script counts which jobs caused those re-runs and how much wall-clock time the failed attempts took.

```bash
node flake-report.mjs <owner/repo> <workflow file> [branch] [runs]
node flake-report.mjs metabase/metabase run-tests.yml master 60 > metabase-report.md
```

It needs Node 20+ and the GitHub CLI (`gh`), logged in. It only reads. It has no dependencies.

## Example: metabase/metabase, 9 to 11 Nov 2026

Full output: [`metabase-report.md`](metabase-report.md). The last 60 completed push runs of `run-tests.yml` on `master`:

| Outcome | Runs |
|---|---|
| Passed first time | 5 |
| **Passed only after a re-run of the same commit** | **28** |
| Ended as failed | 0 |
| Cancelled or skipped (a newer push replaced them) | 27 |

Of the 33 runs that reached a verdict, 28 (85%) needed a re-run. The failed first attempts took 1,112 minutes of wall-clock time, about 40 minutes per flaky run.

Jobs that failed and then passed most often:

| Job | Flaky runs (of 28) |
|---|---|
| Athena driver tests | 5 |
| MotherDuck driver tests | 5 |
| BigQuery driver tests | 3 |
| Postgres Latest EE app-db tests | 3 |
| Postgres 14.x EE app-db tests | 2 |
| Loki visual tests | 2 |

The three cloud-warehouse drivers account for 13 of the 28.

## What this does and does not show

- Metabase already re-runs a failed `Run tests` workflow on `master` once, automatically (`.github/workflows/rerun-workflows.yml`). It also has a quarantine system (`release/ci-conductor`). So the team knows flakes exist and has built tooling for them. This report measures, from outside, how often that automatic re-run is what turns `master` green, and which jobs it is covering for.
- The sample is three days and 60 runs. It is a snapshot, not a trend.
- "Wall-clock minutes" is the span from the first job start to the last job end of each failed attempt. It is not billed runner minutes, which would be higher because jobs run in parallel.
- A job that fails on attempt 1 because of a runner or network problem counts the same as a flaky test. The script names the failed step, not the failed test. Finding the test needs the job logs.
- Jobs named `*-result` only report the status of other jobs. The script lists them last and marks them as roll-ups.
- Shards are grouped by job name (`e2e-tests (chrome, 7)` and `(chrome, 8)` count as one job).

## What I would do next with this

1. Run it nightly and keep the numbers, so a job that gets worse shows up as a trend.
2. Read the logs of the failed attempts and group by failing test and error text, so the top row says "test X times out against Athena" and not only "Athena driver tests".
3. For cloud drivers, separate "the warehouse was slow" from "the test is wrong": compare failures across drivers in the same run.
