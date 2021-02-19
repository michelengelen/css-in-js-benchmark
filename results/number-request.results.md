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
|react-jss|947.00 ms|685.00 ms|745.00 ms|792.33 ms|
|styled-components|976.00 ms|698.00 ms|678.00 ms|784.00 ms|
|typestyle|729.00 ms|841.00 ms|709.00 ms|759.67 ms|


---

#### Results

1000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1108.00 ms|740.00 ms|767.00 ms|871.67 ms|
|styled-components|959.00 ms|797.00 ms|709.00 ms|821.67 ms|
|typestyle|756.00 ms|863.00 ms|801.00 ms|806.67 ms|


---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
