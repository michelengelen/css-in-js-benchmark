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
|react-jss|2389.00 ms|1530.00 ms|1790.00 ms|1903.00 ms|
|styled-components|1557.00 ms|1640.00 ms|1516.00 ms|1571.00 ms|
|typestyle|1782.00 ms|1457.00 ms|1702.00 ms|1647.00 ms|


---

#### Results

2000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|2010.00 ms|1754.00 ms|1633.00 ms|1799.00 ms|
|styled-components|1682.00 ms|1579.00 ms|1698.00 ms|1653.00 ms|
|typestyle|1651.00 ms|1640.00 ms|1642.00 ms|1644.33 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
