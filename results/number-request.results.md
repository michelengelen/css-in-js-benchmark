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
|react-jss|530.00 ms|337.00 ms|340.00 ms|334.00 ms|330.00 ms|374.20 ms|
|sass|428.00 ms|372.00 ms|335.00 ms|328.00 ms|329.00 ms|358.40 ms|
|styled-components|409.00 ms|338.00 ms|334.00 ms|341.00 ms|339.00 ms|352.20 ms|
|treat|373.00 ms|328.00 ms|346.00 ms|339.00 ms|321.00 ms|341.40 ms|
|typestyle|338.00 ms|325.00 ms|361.00 ms|329.00 ms|368.00 ms|344.20 ms|


---

#### Results

500 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|491.00 ms|353.00 ms|377.00 ms|370.00 ms|372.00 ms|392.60 ms|
|sass|446.00 ms|378.00 ms|351.00 ms|361.00 ms|357.00 ms|378.60 ms|
|styled-components|423.00 ms|372.00 ms|336.00 ms|369.00 ms|348.00 ms|369.60 ms|
|treat|383.00 ms|344.00 ms|376.00 ms|349.00 ms|353.00 ms|361.00 ms|
|typestyle|363.00 ms|373.00 ms|366.00 ms|350.00 ms|364.00 ms|363.20 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
