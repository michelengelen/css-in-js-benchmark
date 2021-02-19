## Express JS

---
#### Time To Complete 2000 consecutive requests

In this test, we see how well the different frameworks hold-up against each other in high-use scenarios. We want to see how much throughput our server can handle given the choice of a particular CSS in JS framework (Please note that this is a test of server-side performance rather than client page-loading performance):

#### Command To run the test
```bash
npm run number-bench
```

---

#### Results

2000 requests to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1959.00 ms|1421.00 ms|22618.00 ms|8666.00 ms|
|typestyle|1492.00 ms|1387.00 ms|2108.00 ms|1662.33 ms|


---

#### Results

2000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1804.00 ms|1628.00 ms|3094.00 ms|2175.33 ms|
|typestyle|1686.00 ms|2904.00 ms|2387.00 ms|2325.67 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
