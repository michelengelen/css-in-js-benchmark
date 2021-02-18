## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|-------|-----:|-----:|
|react-jss|3387.0000 ms|186579.0000 ms|
|typestyle|2741.0000 ms|147639.0000 ms|


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
|react-jss|19.7980 ms|21.9210 ms|42.2880 ms|28.0023 ms|
|typestyle|41.3140 ms|20.2240 ms|25.1680 ms|28.9020 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|67.4450 ms|20.8800 ms|17.0650 ms|35.1300 ms|
|typestyle|32.4750 ms|17.0250 ms|13.9300 ms|21.1433 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|58.0350 ms|20.5650 ms|15.9700 ms|31.5233 ms|
|typestyle|32.3800 ms|16.8500 ms|13.7700 ms|21.0000 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|58.0550 ms|20.5900 ms|15.9900 ms|31.5450 ms|
|typestyle|32.4000 ms|16.8750 ms|13.7900 ms|21.0217 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|67.4550 ms|20.8800 ms|17.0700 ms|35.1350 ms|
|typestyle|32.4850 ms|17.0300 ms|13.9300 ms|21.1483 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1840.0000 ms|1586.0000 ms|1448.0000 ms|1624.6667 ms|
|typestyle|1666.0000 ms|1422.0000 ms|1665.0000 ms|1584.3333 ms|


---
