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
|react-jss|534.00 ms|372.00 ms|347.00 ms|427.00 ms|369.00 ms|409.80 ms|
|sass|441.00 ms|373.00 ms|343.00 ms|381.00 ms|388.00 ms|385.20 ms|
|styled-components|420.00 ms|378.00 ms|353.00 ms|360.00 ms|353.00 ms|372.80 ms|
|treat|378.00 ms|358.00 ms|376.00 ms|397.00 ms|373.00 ms|376.40 ms|
|typestyle|374.00 ms|381.00 ms|393.00 ms|375.00 ms|377.00 ms|380.00 ms|


---

#### Results

500 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|505.00 ms|382.00 ms|360.00 ms|472.00 ms|397.00 ms|423.20 ms|
|sass|453.00 ms|369.00 ms|392.00 ms|398.00 ms|407.00 ms|403.80 ms|
|styled-components|426.00 ms|392.00 ms|382.00 ms|425.00 ms|378.00 ms|400.60 ms|
|treat|418.00 ms|393.00 ms|475.00 ms|381.00 ms|391.00 ms|411.60 ms|
|typestyle|418.00 ms|379.00 ms|425.00 ms|417.00 ms|379.00 ms|403.60 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
