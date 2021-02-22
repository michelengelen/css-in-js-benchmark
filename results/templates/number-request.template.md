## Express JS

---
#### Time To Complete !~!numberOfRequests!~! consecutive requests

In this test, we see how well the different frameworks hold-up against each other in high-use scenarios. We want to see how much throughput our server can handle given the choice of a particular CSS in JS framework (Please note that this is a test of server-side performance rather than client page-loading performance):

#### Command To run the test
```bash
npm run number-bench
```

---

#### Results

!~!numberOfRequests!~! requests to `/`

!~!numberOfHomeRequestsResults!~!

---

#### Results

!~!numberOfRequests!~! requests to `/table` (rendering a table with 500 rows)

!~!numberOfTableRequestsResults!~!

---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [number-request template](./number-requests.template.md)
