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
|react-jss|1809.00 ms|1564.00 ms|1376.00 ms|1583.00 ms|
|styled-components|1692.00 ms|1401.00 ms|1612.00 ms|1568.33 ms|
|typestyle|1540.00 ms|1577.00 ms|1439.00 ms|1518.67 ms|


---

#### Results

2000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|2046.00 ms|1574.00 ms|1877.00 ms|1832.33 ms|
|styled-components|1482.00 ms|1893.00 ms|1485.00 ms|1620.00 ms|
|typestyle|1857.00 ms|1557.00 ms|1832.00 ms|1748.67 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
