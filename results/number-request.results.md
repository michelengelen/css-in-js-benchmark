## Express JS

---
#### Time To Complete 1000 consecutive requests

In this test, we see how well the different frameworks hold-up against each other in high-use scenarios. We want to see how much throughput our server can handle given the choice of a particular CSS in JS framework (Please note that this is a test of server-side performance rather than client page-loading performance):

#### Command To run the test
```bash
npm run number-bench
```

---

#### Results

1000 requests to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|972.00 ms|718.00 ms|802.00 ms|830.67 ms|
|styled-components|924.00 ms|695.00 ms|715.00 ms|778.00 ms|
|typestyle|851.00 ms|792.00 ms|675.00 ms|772.67 ms|


---

#### Results

1000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|884.00 ms|779.00 ms|875.00 ms|846.00 ms|
|styled-components|959.00 ms|815.00 ms|702.00 ms|825.33 ms|
|typestyle|799.00 ms|935.00 ms|765.00 ms|833.00 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
