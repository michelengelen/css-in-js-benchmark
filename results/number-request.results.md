## Express JS

---
#### Time To Complete 5000 Requests

In this test, we see how well the different frameworks hold-up against each other in high-use scenarios. We want to see how much throughput our server can handle given the choice of a particular CSS in JS framework (Please note that this is a test of server-side performance rather than client page-loading performance):

#### Command To run the test
```bash
npm run number-request
```

---

#### Results

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1818 ms|1806 ms|1521 ms|1715.0000 ms|
|typestyle|1680 ms|1715 ms|1505 ms|1633.3333 ms|



