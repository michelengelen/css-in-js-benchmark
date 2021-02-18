## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|-------|-----:|-----:|
!~!buildResults!~!

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
!~!FirstMeaningfulPaint!~!

**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domComplete!~!

The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domInteractive!~!

The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domContentLoadedEventEnd!~!

The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!duration!~!

In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!numberOfRquestsResults!~!

---
