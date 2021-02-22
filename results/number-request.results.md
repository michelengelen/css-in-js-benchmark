## Express JS

---
#### Time To Complete 500 consecutive requests

In this test, we see how well the different frameworks hold-up against each other in high-use scenarios. We want to see how much throughput our server can handle given the choice of a particular CSS in JS framework (Please note that this is a test of server-side performance rather than client page-loading performance):

#### Command To run the test
```bash
npm run number-bench
```

---

#### Results

500 requests to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|612.00 ms|416.00 ms|413.00 ms|356.00 ms|20640.00 ms|4487.40 ms|
|sass|512.00 ms|354.00 ms|409.00 ms|331.00 ms|1204.00 ms|562.00 ms|
|styled-components|460.00 ms|360.00 ms|372.00 ms|329.00 ms|403.00 ms|384.80 ms|
|typestyle|370.00 ms|430.00 ms|341.00 ms|367.00 ms|419.00 ms|385.40 ms|


---

#### Results

500 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|605.00 ms|409.00 ms|449.00 ms|348.00 ms|520.00 ms|466.20 ms|
|sass|523.00 ms|403.00 ms|481.00 ms|368.00 ms|417.00 ms|438.40 ms|
|styled-components|412.00 ms|425.00 ms|373.00 ms|358.00 ms|1375.00 ms|588.60 ms|
|typestyle|433.00 ms|434.00 ms|380.00 ms|372.00 ms|1231.00 ms|570.00 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
