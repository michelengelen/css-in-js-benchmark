## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|-------|-----:|-----:|
|react-jss|3971 ms|213.233 KB|
|typestyle|3247 ms|165.309 KB|


---

#### Command To run the complete test-suite

```bash
npm run bench-all
```

### Results from Puppeteer Test

---

`FirstMeaningfulPaint`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|26.65 ms|20.98 ms|27.79 ms|25.14 ms|
|typestyle|23.54 ms|40.90 ms|23.07 ms|29.17 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|72.99 ms|21.74 ms|17.85 ms|37.53 ms|
|typestyle|34.73 ms|18.05 ms|14.39 ms|22.39 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|61.19 ms|21.36 ms|16.63 ms|33.06 ms|
|typestyle|34.55 ms|17.86 ms|14.29 ms|22.23 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|61.21 ms|21.39 ms|16.67 ms|33.09 ms|
|typestyle|34.59 ms|17.88 ms|14.31 ms|22.26 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|72.99 ms|21.74 ms|17.85 ms|37.53 ms|
|typestyle|34.74 ms|18.05 ms|14.40 ms|22.40 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete 2000 consecutive requests

---

#### Simple Component

2000 requests to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1959.00 ms|1421.00 ms|22618.00 ms|8666.00 ms|
|typestyle|1492.00 ms|1387.00 ms|2108.00 ms|1662.33 ms|


---

#### Long Table Component

2000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1804.00 ms|1628.00 ms|3094.00 ms|2175.33 ms|
|typestyle|1686.00 ms|2904.00 ms|2387.00 ms|2325.67 ms|


## ToDo

[] add sass
[] add aphrodite
[] add emotion
[] add styled-components
[] add theming tests
[] add better console output while testing
[] add chalk for coloring console outputs

---

## Resources

This repository is based upon the work done here [x_team_css_in_js](https://github.com/Thoughtscript/x_team_css_in_js)
