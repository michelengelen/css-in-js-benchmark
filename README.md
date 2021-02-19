## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|-------|-----:|-----:|
|react-jss|3884 ms|213.239 KB|
|styled-components|3553 ms|188.235 KB|
|typestyle|3635 ms|165.315 KB|


---

#### Command To run the complete test-suite

```bash
npm run bench-all
```

### Results from Puppeteer Test

---

`FirstMeaningfulPaint`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|54.61 ms|51.37 ms|54.68 ms|53.55 ms|
|styled-components|40.34 ms|47.73 ms|44.39 ms|44.15 ms|
|typestyle|49.24 ms|55.13 ms|42.01 ms|48.79 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|204.82 ms|204.83 ms|208.24 ms|205.96 ms|
|styled-components|217.96 ms|248.79 ms|246.62 ms|237.79 ms|
|typestyle|307.92 ms|347.39 ms|349.17 ms|334.83 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.75 ms|28.32 ms|28.18 ms|39.08 ms|
|styled-components|61.75 ms|28.90 ms|28.75 ms|39.80 ms|
|typestyle|50.14 ms|27.15 ms|33.12 ms|36.80 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|220.06 ms|197.07 ms|90.68 ms|169.27 ms|
|styled-components|241.63 ms|252.38 ms|206.04 ms|233.35 ms|
|typestyle|93.27 ms|73.56 ms|75.13 ms|80.65 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.53 ms|28.14 ms|28.00 ms|38.89 ms|
|styled-components|60.32 ms|28.50 ms|28.35 ms|39.06 ms|
|typestyle|49.92 ms|26.97 ms|32.94 ms|36.61 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|77.64 ms|65.51 ms|59.68 ms|67.61 ms|
|styled-components|118.54 ms|124.47 ms|101.93 ms|114.98 ms|
|typestyle|68.77 ms|53.80 ms|55.52 ms|59.37 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.55 ms|28.17 ms|28.04 ms|38.92 ms|
|styled-components|60.38 ms|28.54 ms|28.38 ms|39.10 ms|
|typestyle|49.97 ms|27.01 ms|32.97 ms|36.65 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|77.66 ms|65.54 ms|59.75 ms|67.65 ms|
|styled-components|118.55 ms|124.57 ms|101.96 ms|115.03 ms|
|typestyle|68.81 ms|53.83 ms|55.55 ms|59.40 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.75 ms|28.33 ms|28.19 ms|39.09 ms|
|styled-components|61.75 ms|28.91 ms|28.76 ms|39.80 ms|
|typestyle|50.14 ms|27.15 ms|33.13 ms|36.81 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|220.07 ms|197.08 ms|90.68 ms|169.28 ms|
|styled-components|241.66 ms|252.38 ms|206.07 ms|233.37 ms|
|typestyle|93.29 ms|73.56 ms|75.14 ms|80.66 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete 1000 consecutive requests

---

#### Simple Component

1000 requests to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|972.00 ms|718.00 ms|802.00 ms|830.67 ms|
|styled-components|924.00 ms|695.00 ms|715.00 ms|778.00 ms|
|typestyle|851.00 ms|792.00 ms|675.00 ms|772.67 ms|


---

#### Long Table Component

1000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|884.00 ms|779.00 ms|875.00 ms|846.00 ms|
|styled-components|959.00 ms|815.00 ms|702.00 ms|825.33 ms|
|typestyle|799.00 ms|935.00 ms|765.00 ms|833.00 ms|


## ToDo

- [ ] add sass
- [ ] add aphrodite
- [ ] add emotion
- [x] add styled-components
- [ ] add theming tests
- [ ] add better console output while testing
- [x] add chalk for coloring console outputs
- [ ] add logging for puppeteer tests

---

## Resources

This repository is based upon the work done here [x_team_css_in_js](https://github.com/Thoughtscript/x_team_css_in_js)
