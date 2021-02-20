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
|sass|976.00 ms|771.00 ms|20660.00 ms|7469.00 ms|
|react-jss|824.00 ms|814.00 ms|1480.00 ms|1039.33 ms|
|styled-components|863.00 ms|710.00 ms|783.00 ms|785.33 ms|
|typestyle|834.00 ms|790.00 ms|1652.00 ms|1092.00 ms|


---

#### Results

1000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|896.00 ms|832.00 ms|1461.00 ms|1063.00 ms|
|react-jss|890.00 ms|918.00 ms|1542.00 ms|1116.67 ms|
|styled-components|891.00 ms|823.00 ms|1732.00 ms|1148.67 ms|
|typestyle|849.00 ms|714.00 ms|1285.00 ms|949.33 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
