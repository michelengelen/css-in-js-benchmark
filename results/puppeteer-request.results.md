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

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|38.83 ms|43.74 ms|42.40 ms|44.08 ms|40.54 ms|41.92 ms|
|sass|54.31 ms|59.08 ms|46.74 ms|55.63 ms|50.85 ms|53.32 ms|
|styled-components|54.26 ms|51.80 ms|55.00 ms|53.56 ms|50.32 ms|52.99 ms|
|typestyle|50.30 ms|60.04 ms|56.40 ms|44.93 ms|54.09 ms|53.15 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|210.85 ms|189.71 ms|208.37 ms|182.68 ms|200.48 ms|198.42 ms|
|sass|220.90 ms|257.17 ms|225.81 ms|266.84 ms|221.09 ms|238.36 ms|
|styled-components|224.45 ms|225.72 ms|257.15 ms|252.91 ms|215.05 ms|235.06 ms|
|typestyle|346.67 ms|278.31 ms|305.53 ms|324.60 ms|280.38 ms|307.10 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|62.87 ms|50.96 ms|49.72 ms|48.91 ms|43.19 ms|51.13 ms|
|sass|54.00 ms|36.01 ms|37.71 ms|36.88 ms|39.58 ms|40.84 ms|
|styled-components|55.18 ms|36.19 ms|35.36 ms|29.47 ms|36.28 ms|38.50 ms|
|typestyle|48.12 ms|26.34 ms|29.79 ms|30.44 ms|29.14 ms|32.76 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|216.87 ms|100.49 ms|102.15 ms|102.89 ms|198.46 ms|144.17 ms|
|sass|215.09 ms|217.28 ms|208.49 ms|211.20 ms|245.10 ms|219.43 ms|
|styled-components|210.84 ms|220.80 ms|232.97 ms|207.53 ms|252.34 ms|224.89 ms|
|typestyle|83.62 ms|84.34 ms|95.62 ms|84.02 ms|91.50 ms|87.82 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|62.63 ms|50.77 ms|49.49 ms|48.65 ms|42.99 ms|50.91 ms|
|sass|52.97 ms|35.64 ms|37.30 ms|34.05 ms|38.40 ms|39.67 ms|
|styled-components|54.10 ms|34.94 ms|34.90 ms|29.05 ms|35.79 ms|37.76 ms|
|typestyle|47.89 ms|26.15 ms|29.59 ms|30.18 ms|28.93 ms|32.55 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|78.14 ms|68.43 ms|69.55 ms|70.03 ms|71.28 ms|71.48 ms|
|sass|111.29 ms|110.87 ms|107.61 ms|108.18 ms|118.02 ms|111.19 ms|
|styled-components|106.99 ms|113.41 ms|109.20 ms|101.11 ms|125.71 ms|111.29 ms|
|typestyle|63.41 ms|63.17 ms|70.15 ms|63.28 ms|67.97 ms|65.60 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|62.68 ms|50.80 ms|49.55 ms|48.73 ms|43.02 ms|50.95 ms|
|sass|53.00 ms|35.69 ms|37.34 ms|34.08 ms|38.44 ms|39.71 ms|
|styled-components|54.15 ms|34.97 ms|34.93 ms|29.10 ms|35.82 ms|37.79 ms|
|typestyle|47.96 ms|26.19 ms|29.63 ms|30.22 ms|28.98 ms|32.60 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|78.17 ms|68.46 ms|69.58 ms|70.06 ms|71.31 ms|71.51 ms|
|sass|111.31 ms|110.93 ms|107.65 ms|108.22 ms|118.05 ms|111.23 ms|
|styled-components|107.02 ms|113.46 ms|109.25 ms|101.14 ms|125.77 ms|111.33 ms|
|typestyle|63.45 ms|63.21 ms|70.20 ms|63.32 ms|68.01 ms|65.64 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|62.87 ms|50.96 ms|49.72 ms|48.91 ms|43.19 ms|51.13 ms|
|sass|54.00 ms|36.02 ms|37.72 ms|36.89 ms|39.58 ms|40.84 ms|
|styled-components|55.18 ms|36.20 ms|35.36 ms|29.47 ms|36.29 ms|38.50 ms|
|typestyle|48.12 ms|26.34 ms|29.80 ms|30.44 ms|29.15 ms|32.77 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|216.88 ms|100.50 ms|102.16 ms|102.90 ms|198.46 ms|144.18 ms|
|sass|215.09 ms|217.29 ms|208.50 ms|211.22 ms|245.10 ms|219.44 ms|
|styled-components|210.86 ms|220.80 ms|232.98 ms|207.54 ms|252.34 ms|224.90 ms|
|typestyle|83.63 ms|84.34 ms|95.63 ms|84.04 ms|91.51 ms|87.83 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [puppeteer-request template](./templates/puppeteer-requests.template.md)
