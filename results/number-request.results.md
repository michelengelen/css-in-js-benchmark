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
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|555.00 ms|352.00 ms|402.00 ms|376.00 ms|346.00 ms|406.20 ms|
|react-jss|458.00 ms|396.00 ms|317.00 ms|379.00 ms|346.00 ms|379.20 ms|
|sass|446.00 ms|384.00 ms|317.00 ms|344.00 ms|390.00 ms|376.20 ms|
|styled-components|409.00 ms|328.00 ms|386.00 ms|351.00 ms|415.00 ms|377.80 ms|
|treat|400.00 ms|325.00 ms|362.00 ms|351.00 ms|369.00 ms|361.40 ms|
|typestyle|378.00 ms|404.00 ms|381.00 ms|367.00 ms|394.00 ms|384.80 ms|


---

#### Results

500 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|563.00 ms|383.00 ms|346.00 ms|427.00 ms|343.00 ms|412.40 ms|
|react-jss|495.00 ms|391.00 ms|346.00 ms|440.00 ms|433.00 ms|421.00 ms|
|sass|453.00 ms|374.00 ms|502.00 ms|391.00 ms|405.00 ms|425.00 ms|
|styled-components|434.00 ms|362.00 ms|403.00 ms|396.00 ms|381.00 ms|395.20 ms|
|treat|427.00 ms|361.00 ms|383.00 ms|361.00 ms|380.00 ms|382.40 ms|
|typestyle|376.00 ms|356.00 ms|391.00 ms|381.00 ms|1311.00 ms|563.00 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
