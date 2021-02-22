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
|react-jss|519.00 ms|361.00 ms|430.00 ms|371.00 ms|20023.00 ms|4340.80 ms|
|sass|509.00 ms|378.00 ms|421.00 ms|363.00 ms|389.00 ms|412.00 ms|
|styled-components|477.00 ms|350.00 ms|463.00 ms|336.00 ms|366.00 ms|398.40 ms|
|typestyle|370.00 ms|328.00 ms|381.00 ms|413.00 ms|1406.00 ms|579.60 ms|


---

#### Results

500 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|517.00 ms|390.00 ms|453.00 ms|408.00 ms|1331.00 ms|619.80 ms|
|sass|539.00 ms|386.00 ms|467.00 ms|356.00 ms|1179.00 ms|585.40 ms|
|styled-components|441.00 ms|376.00 ms|415.00 ms|380.00 ms|389.00 ms|400.20 ms|
|typestyle|412.00 ms|407.00 ms|398.00 ms|427.00 ms|522.00 ms|433.20 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
