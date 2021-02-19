## Puppeteer

---

#### Command To run the test
```bash
npm run puppeteer-bench
```

### Results

all metrics are measured in ms

---

`FirstMeaningfulPaint`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|26.14 ms|18.63 ms|24.74 ms|23.17 ms|
|styled-components|22.25 ms|43.14 ms|27.40 ms|30.93 ms|
|typestyle|26.03 ms|29.50 ms|19.97 ms|25.17 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|63.91 ms|16.07 ms|15.94 ms|31.97 ms|
|styled-components|21.82 ms|17.40 ms|16.34 ms|18.52 ms|
|typestyle|17.56 ms|17.06 ms|17.44 ms|17.35 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|63.72 ms|15.93 ms|15.75 ms|31.80 ms|
|styled-components|21.57 ms|17.21 ms|16.11 ms|18.30 ms|
|typestyle|17.40 ms|16.85 ms|17.22 ms|17.16 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|63.75 ms|15.94 ms|15.78 ms|31.82 ms|
|styled-components|21.61 ms|17.23 ms|16.13 ms|18.33 ms|
|typestyle|17.43 ms|16.87 ms|17.24 ms|17.18 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|63.91 ms|16.07 ms|15.95 ms|31.98 ms|
|styled-components|21.83 ms|17.40 ms|16.37 ms|18.53 ms|
|typestyle|17.56 ms|17.06 ms|17.45 ms|17.35 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [puppeteer-request template](./templates/puppeteer-requests.template.md)
