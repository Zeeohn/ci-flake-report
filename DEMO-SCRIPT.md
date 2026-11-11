# Demo script (about 75 seconds, terminal recording)

1. **(10 s)** "Your CI Engineer posting asks for someone who finds patterns in flaky tests. I measured Metabase's master branch from public GitHub Actions data."
2. **(15 s)** Open `flake-report.mjs`, show the comment at the top. "A run that fails and then passes on the same commit is a flake. The script counts which jobs cause those re-runs."
3. **(20 s)** Run `node flake-report.mjs metabase/metabase run-tests.yml master 60`. While it runs: "It only reads the Actions API through the GitHub CLI."
4. **(20 s)** Show the top of the output. "Of 33 runs that reached a verdict, 28 passed only after a re-run. Athena, MotherDuck and BigQuery driver tests lead the list."
5. **(10 s)** Open the README section "What this does and does not show". "You already re-run failed master runs automatically and you have a quarantine system. This shows what that re-run is covering for. It's a three-day snapshot."

Before recording: run the script once yourself and read it top to bottom. Numbers will differ from the README because the data moves.
