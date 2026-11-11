# Flaky-job report: metabase/metabase, workflow "run-tests.yml", branch master

Sample: the last 60 completed push runs, 2026-11-09 to 2026-11-11.

- Passed first time: 5 (8%)
- **Passed only after a re-run of the same commit: 28 (47%)**
- Ended as failed: 0 (0%)
- Cancelled or skipped (usually replaced by a newer push): 27 (45%)
- Of the 33 runs that reached a verdict, 85% needed a re-run to pass
- Wall-clock time of the failed attempts: 1112 minutes, 40 minutes per flaky run

## Jobs that failed and then passed on the same commit

| Job (shards grouped) | Flaky runs | Share of flaky runs | Failed job instances | Step that failed most | Example |
|---|---|---|---|---|---|
| driver-tests / Athena Driver Tests | 5 | 18% | 5 | Test Athena driver (5) | [log](https://github.com/metabase/metabase/actions/runs/42849607770/job/129946719760) |
| driver-tests / MotherDuck Driver Tests | 5 | 18% | 6 | Test MotherDuck driver (6) | [log](https://github.com/metabase/metabase/actions/runs/42809205181/job/129806427761) |
| driver-tests / BigQuery Driver Tests | 3 | 11% | 3 | Test BigQuery Cloud SDK driver (3) | [log](https://github.com/metabase/metabase/actions/runs/42842486500/job/129921718667) |
| app-db-tests / Postgres Latest EE App DB Tests | 3 | 11% | 3 | Test Postgres Latest (3) | [log](https://github.com/metabase/metabase/actions/runs/42734252730/job/129560606055) |
| app-db-tests / Postgres 14.x EE App DB Tests | 2 | 7% | 2 | Test Postgres 14.x (2) | [log](https://github.com/metabase/metabase/actions/runs/42842486500/job/129922766175) |
| loki-tests / loki-run | 2 | 7% | 2 | Run Loki Visual Tests (2) | [log](https://github.com/metabase/metabase/actions/runs/42840887908/job/129915762754) |
| loki-tests / visual-test | 2 | 7% | 2 | Check Loki job status (2) | [log](https://github.com/metabase/metabase/actions/runs/42840887908/job/129922933618) |
| app-db-tests / Postgres 14.x Enterprise Tests | 2 | 7% | 2 | Test Postgres 14.x (2) | [log](https://github.com/metabase/metabase/actions/runs/42813802043/job/129822946280) |
| app-db-tests / MariaDB Latest EE App DB Tests | 2 | 7% | 2 | Test MariaDB Latest (2) | [log](https://github.com/metabase/metabase/actions/runs/42807607401/job/129801895781) |
| driver-tests / MySQL 9 Driver Tests | 1 | 4% | 1 | Test MySQL 9 (1) | [log](https://github.com/metabase/metabase/actions/runs/42852488257/job/129957540812) |
| e2e-tests / e2e-group-21-ee / e2e-tests-e2e-group-21-ee | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42849607770/job/129955507122) |
| driver-tests / Druid | 1 | 4% | 1 | Test Druid JDBC driver (1) | [log](https://github.com/metabase/metabase/actions/runs/42842486500/job/129921718432) |
| e2e-tests / e2e-group-18-ee / e2e-tests-e2e-group-18-ee | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42842486500/job/129930895647) |
| frontend-tests / fe-tests-unit | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42837322867/job/129903068623) |
| backend-tests / Java 25 Enterprise Tests | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42817166863/job/129834234353) |
| e2e-tests / e2e-group-19-ee / e2e-tests-e2e-group-19-ee | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42812618402/job/129825095857) |
| backend-tests / Java 25 EE App DB Tests | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42811750555/job/129815787303) |
| semantic-search-tests / Postgres 14.x with pgvector pg17 Semantic Search Tests | 1 | 4% | 1 | Test Postgres 14.x with pgvector pg17 (1) | [log](https://github.com/metabase/metabase/actions/runs/42799001352/job/129771617379) |
| driver-tests / SQL Server 2022 Driver Tests | 1 | 4% | 1 | Test SQL Server 2022 (1) | [log](https://github.com/metabase/metabase/actions/runs/42795301610/job/129759164673) |
| app-db-tests / MariaDB 10.6 EE App DB Tests | 1 | 4% | 1 | Test MariaDB 10.6 (1) | [log](https://github.com/metabase/metabase/actions/runs/42795301610/job/129760216399) |
| e2e-tests / e2e-group-14-ee / e2e-tests-e2e-group-14-ee | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42737896289/job/129577595334) |
| driver-tests / Spark SQL | 1 | 4% | 1 | Test Spark driver (1) | [log](https://github.com/metabase/metabase/actions/runs/42731134954/job/129549621126) |
| semantic-search-tests / MariaDB 10.6 with pgvector pg17 Semantic Search Tests | 1 | 4% | 1 | Test MariaDB 10.6 with pgvector pg17 (1) | [log](https://github.com/metabase/metabase/actions/runs/42723617485/job/129523635447) |
| frontend-tests / fe-tests-unit-jest | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42723617485/job/129523648147) |
| e2e-tests / e2e-group-07-ee / e2e-tests-e2e-group-07-ee | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42716149968/job/129505060940) |
| driver-tests / Redshift OSS (Excluding Upload Tests) Part | 1 | 4% | 1 | Test Redshift OSS (Excluding Upload Tests) Part 1 (1) | [log](https://github.com/metabase/metabase/actions/runs/42716091034/job/129498237435) |
| driver-tests / Postgres 14.x Transforms Python Tests | 1 | 4% | 1 | Test Postgres 14.x (Transforms Python Tests) (1) | [log](https://github.com/metabase/metabase/actions/runs/42716091034/job/129498237641) |
| e2e-tests / e2e-group-22-ee / e2e-tests-e2e-group-22-ee | 1 | 4% | 1 | Quarantine gate (1) | [log](https://github.com/metabase/metabase/actions/runs/42710331316/job/129486873063) |
| driver-tests / Postgres Latest Transforms Python Tests | 1 | 4% | 1 | Test Postgres Latest (Transforms Python Tests) (1) | [log](https://github.com/metabase/metabase/actions/runs/42705868810/job/129462857527) |
| app-db-tests / Postgres Latest Enterprise Tests | 1 | 4% | 1 | Test Postgres Latest (1) | [log](https://github.com/metabase/metabase/actions/runs/42699753400/job/129442405118) |
| driver-tests / drivers-tests-result *(roll-up)* | 15 | 54% | 15 | Check job status (15) | [log](https://github.com/metabase/metabase/actions/runs/42852488257/job/129974922956) |
| app-db-tests / app-db-tests-result *(roll-up)* | 11 | 39% | 11 | Check job status (11) | [log](https://github.com/metabase/metabase/actions/runs/42842486500/job/129947107156) |
| e2e-tests / e2e-tests-result *(roll-up)* | 7 | 25% | 7 | Test results (7) | [log](https://github.com/metabase/metabase/actions/runs/42849607770/job/129964132550) |
| frontend-tests / fe-tests-result *(roll-up)* | 2 | 7% | 2 | Check frontend job status (2) | [log](https://github.com/metabase/metabase/actions/runs/42837322867/job/129912045648) |
| backend-tests / be-tests-result *(roll-up)* | 2 | 7% | 2 | Check backend job status (2) | [log](https://github.com/metabase/metabase/actions/runs/42817166863/job/129843103098) |
| semantic-search-tests / semantic-search-tests-result *(roll-up)* | 2 | 7% | 2 | Check job status (2) | [log](https://github.com/metabase/metabase/actions/runs/42799001352/job/129773560730) |

## Flaky runs

- [9455dd36](https://github.com/metabase/metabase/actions/runs/42852488257): 2 attempts, 39 min in failed attempts. Failed: driver-tests / MySQL 9 Driver Tests; driver-tests / drivers-tests-result
- [2269cf3c](https://github.com/metabase/metabase/actions/runs/42849607770): 2 attempts, 34 min in failed attempts. Failed: driver-tests / Athena Driver Tests 0; e2e-tests / e2e-group-21-ee / e2e-tests-e2e-group-21-ee; e2e-tests / e2e-tests-result; driver-tests / drivers-tests-result
- [c4d000ac](https://github.com/metabase/metabase/actions/runs/42842486500): 2 attempts, 42 min in failed attempts. Failed: driver-tests / Druid (JDBC); driver-tests / BigQuery Driver Tests 1; app-db-tests / Postgres 14.x EE App DB Tests (Part 2); e2e-tests / e2e-group-18-ee / e2e-tests-e2e-group-18-ee; driver-tests / drivers-tests-result; e2e-tests / e2e-tests-result; app-db-tests / app-db-tests-result
- [8f00c608](https://github.com/metabase/metabase/actions/runs/42840887908): 2 attempts, 54 min in failed attempts. Failed: loki-tests / loki-run; loki-tests / visual-test; app-db-tests / app-db-tests-result; e2e-tests / e2e-tests-result
- [7b078f80](https://github.com/metabase/metabase/actions/runs/42837322867): 2 attempts, 40 min in failed attempts. Failed: frontend-tests / fe-tests-unit (1); frontend-tests / fe-tests-result
- [55f2f357](https://github.com/metabase/metabase/actions/runs/42817166863): 2 attempts, 37 min in failed attempts. Failed: backend-tests / Java 25 Enterprise Tests; backend-tests / be-tests-result
- [947014cd](https://github.com/metabase/metabase/actions/runs/42813802043): 2 attempts, 42 min in failed attempts. Failed: app-db-tests / Postgres 14.x Enterprise Tests; app-db-tests / app-db-tests-result
- [26412a7b](https://github.com/metabase/metabase/actions/runs/42812618402): 2 attempts, 36 min in failed attempts. Failed: e2e-tests / e2e-group-19-ee / e2e-tests-e2e-group-19-ee; e2e-tests / e2e-tests-result
- [5f079f7d](https://github.com/metabase/metabase/actions/runs/42811750555): 2 attempts, 43 min in failed attempts. Failed: backend-tests / Java 25 EE App DB Tests (Part 1); backend-tests / be-tests-result; app-db-tests / app-db-tests-result
- [a10f803f](https://github.com/metabase/metabase/actions/runs/42809205181): 2 attempts, 41 min in failed attempts. Failed: driver-tests / MotherDuck Driver Tests 1; driver-tests / MotherDuck Driver Tests 0; driver-tests / drivers-tests-result
- [ce3b4233](https://github.com/metabase/metabase/actions/runs/42807607401): 2 attempts, 37 min in failed attempts. Failed: app-db-tests / MariaDB Latest EE App DB Tests (Part 2); app-db-tests / app-db-tests-result
- [7c64e0aa](https://github.com/metabase/metabase/actions/runs/42799001352): 2 attempts, 42 min in failed attempts. Failed: semantic-search-tests / Postgres 14.x with pgvector pg17 Semantic Search Tests; semantic-search-tests / semantic-search-tests-result
- [e3f314c9](https://github.com/metabase/metabase/actions/runs/42796843044): 2 attempts, 40 min in failed attempts. Failed: loki-tests / loki-run; loki-tests / visual-test
- [5041fd2b](https://github.com/metabase/metabase/actions/runs/42795301610): 2 attempts, 43 min in failed attempts. Failed: driver-tests / SQL Server 2022 Driver Tests; app-db-tests / MariaDB 10.6 EE App DB Tests (Part 2); app-db-tests / Postgres 14.x Enterprise Tests; driver-tests / drivers-tests-result; app-db-tests / app-db-tests-result
- [36253889](https://github.com/metabase/metabase/actions/runs/42787617836): 2 attempts, 41 min in failed attempts. Failed: driver-tests / Athena Driver Tests 0; driver-tests / drivers-tests-result
- [b7924349](https://github.com/metabase/metabase/actions/runs/42787479290): 2 attempts, 41 min in failed attempts. Failed: driver-tests / MotherDuck Driver Tests 0; driver-tests / drivers-tests-result
- [feffdeaa](https://github.com/metabase/metabase/actions/runs/42764577902): 2 attempts, 42 min in failed attempts. Failed: app-db-tests / MariaDB Latest EE App DB Tests (Part 3); app-db-tests / app-db-tests-result
- [73035f3f](https://github.com/metabase/metabase/actions/runs/42751978584): 2 attempts, 38 min in failed attempts. Failed: driver-tests / BigQuery Driver Tests 0; driver-tests / drivers-tests-result
- [e577afe7](https://github.com/metabase/metabase/actions/runs/42737896289): 2 attempts, 36 min in failed attempts. Failed: e2e-tests / e2e-group-14-ee / e2e-tests-e2e-group-14-ee; e2e-tests / e2e-tests-result
- [1ce0eb1a](https://github.com/metabase/metabase/actions/runs/42734252730): 2 attempts, 39 min in failed attempts. Failed: driver-tests / Athena Driver Tests 0; driver-tests / MotherDuck Driver Tests 1; app-db-tests / Postgres Latest EE App DB Tests (Part 2); app-db-tests / Postgres 14.x EE App DB Tests (Part 2); driver-tests / drivers-tests-result; app-db-tests / app-db-tests-result
- [cf1557f6](https://github.com/metabase/metabase/actions/runs/42733779823): 2 attempts, 38 min in failed attempts. Failed: driver-tests / MotherDuck Driver Tests 0; driver-tests / drivers-tests-result
- [55e4a9ec](https://github.com/metabase/metabase/actions/runs/42731134954): 2 attempts, 34 min in failed attempts. Failed: driver-tests / Spark SQL; app-db-tests / Postgres Latest EE App DB Tests (Part 3); app-db-tests / app-db-tests-result; driver-tests / drivers-tests-result
- [edd8b27d](https://github.com/metabase/metabase/actions/runs/42723617485): 2 attempts, 38 min in failed attempts. Failed: semantic-search-tests / MariaDB 10.6 with pgvector pg17 Semantic Search Tests; frontend-tests / fe-tests-unit-jest (2); driver-tests / MotherDuck Driver Tests 1; semantic-search-tests / semantic-search-tests-result; frontend-tests / fe-tests-result; driver-tests / drivers-tests-result
- [7d03abd7](https://github.com/metabase/metabase/actions/runs/42716149968): 2 attempts, 40 min in failed attempts. Failed: e2e-tests / e2e-group-07-ee / e2e-tests-e2e-group-07-ee; e2e-tests / e2e-tests-result
- [91440935](https://github.com/metabase/metabase/actions/runs/42716091034): 2 attempts, 37 min in failed attempts. Failed: driver-tests / Redshift OSS (Excluding Upload Tests) Part 1; driver-tests / Postgres 14.x Transforms Python Tests; app-db-tests / Postgres Latest EE App DB Tests (Part 2); driver-tests / drivers-tests-result; app-db-tests / app-db-tests-result
- [221aeb43](https://github.com/metabase/metabase/actions/runs/42710331316): 2 attempts, 39 min in failed attempts. Failed: driver-tests / Athena Driver Tests 0; e2e-tests / e2e-group-22-ee / e2e-tests-e2e-group-22-ee; e2e-tests / e2e-tests-result; driver-tests / drivers-tests-result
- [1907ef93](https://github.com/metabase/metabase/actions/runs/42705868810): 2 attempts, 40 min in failed attempts. Failed: driver-tests / Athena Driver Tests 0; driver-tests / BigQuery Driver Tests 0; driver-tests / Postgres Latest Transforms Python Tests; driver-tests / drivers-tests-result
- [1d7ad20a](https://github.com/metabase/metabase/actions/runs/42699753400): 2 attempts, 42 min in failed attempts. Failed: app-db-tests / Postgres Latest Enterprise Tests; app-db-tests / app-db-tests-result
