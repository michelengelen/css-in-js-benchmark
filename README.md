## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|-------|-----:|-----:|
|library|1. run|average|
|------|-----:|-----:|
|react-jss|4612 ms|234.411 KB|
|sass|4213 ms|234.411 KB|
|styled-components|3641 ms|209.407 KB|
|typestyle|3226 ms|186.487 KB|


---

#### Command To run the complete test-suite

```bash
npm run bench-all
```

### Results from Puppeteer Test

---

`FirstMeaningfulPaint`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|40.20 ms|34.13 ms|37.53 ms|44.16 ms|39.02 ms|39.01 ms|
|sass|45.49 ms|44.02 ms|47.83 ms|50.05 ms|56.51 ms|48.78 ms|
|styled-components|48.65 ms|48.68 ms|44.34 ms|55.52 ms|50.03 ms|49.44 ms|
|typestyle|59.39 ms|54.33 ms|52.99 ms|41.52 ms|54.10 ms|52.47 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|202.14 ms|197.66 ms|180.75 ms|203.70 ms|176.50 ms|192.15 ms|
|sass|250.21 ms|213.80 ms|249.69 ms|227.79 ms|258.68 ms|240.04 ms|
|styled-components|249.94 ms|213.08 ms|255.65 ms|218.92 ms|256.33 ms|238.79 ms|
|typestyle|316.97 ms|311.07 ms|277.54 ms|352.30 ms|278.77 ms|307.33 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|66.69 ms|46.92 ms|47.58 ms|48.39 ms|46.63 ms|51.24 ms|
|sass|59.76 ms|35.81 ms|38.65 ms|36.50 ms|39.21 ms|41.99 ms|
|styled-components|58.76 ms|36.89 ms|36.03 ms|27.87 ms|36.03 ms|39.12 ms|
|typestyle|50.92 ms|26.13 ms|28.37 ms|26.09 ms|27.26 ms|31.76 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|224.43 ms|105.26 ms|98.84 ms|181.00 ms|184.93 ms|158.89 ms|
|sass|251.46 ms|238.98 ms|240.27 ms|215.33 ms|256.08 ms|240.43 ms|
|styled-components|246.22 ms|225.20 ms|242.92 ms|208.10 ms|230.47 ms|230.58 ms|
|typestyle|90.23 ms|81.54 ms|92.84 ms|78.90 ms|86.92 ms|86.09 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|66.49 ms|46.71 ms|47.35 ms|48.18 ms|46.44 ms|51.03 ms|
|sass|58.68 ms|35.39 ms|38.25 ms|33.54 ms|38.70 ms|40.91 ms|
|styled-components|57.60 ms|36.28 ms|35.54 ms|27.46 ms|34.78 ms|38.33 ms|
|typestyle|50.67 ms|25.94 ms|28.17 ms|25.88 ms|27.03 ms|31.54 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|81.96 ms|69.90 ms|67.98 ms|67.14 ms|64.52 ms|70.30 ms|
|sass|124.21 ms|111.98 ms|113.71 ms|109.61 ms|135.52 ms|119.01 ms|
|styled-components|119.04 ms|113.68 ms|123.07 ms|101.66 ms|114.87 ms|114.47 ms|
|typestyle|66.67 ms|61.47 ms|66.77 ms|59.31 ms|64.58 ms|63.76 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|66.51 ms|46.75 ms|47.41 ms|48.20 ms|46.47 ms|51.07 ms|
|sass|58.72 ms|35.43 ms|38.29 ms|33.61 ms|38.74 ms|40.96 ms|
|styled-components|57.63 ms|36.35 ms|35.61 ms|27.49 ms|34.82 ms|38.38 ms|
|typestyle|50.71 ms|25.98 ms|28.21 ms|25.93 ms|27.08 ms|31.58 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|82.01 ms|69.93 ms|68.02 ms|67.18 ms|64.54 ms|70.33 ms|
|sass|124.25 ms|112.02 ms|113.75 ms|109.65 ms|135.57 ms|119.05 ms|
|styled-components|119.07 ms|113.71 ms|123.13 ms|101.70 ms|114.90 ms|114.50 ms|
|typestyle|66.70 ms|61.50 ms|66.82 ms|59.34 ms|64.62 ms|63.80 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|66.70 ms|46.93 ms|47.59 ms|48.41 ms|46.64 ms|51.25 ms|
|sass|59.76 ms|35.81 ms|38.67 ms|36.50 ms|39.21 ms|41.99 ms|
|styled-components|58.77 ms|36.89 ms|36.04 ms|27.88 ms|36.04 ms|39.12 ms|
|typestyle|50.93 ms|26.13 ms|28.38 ms|26.10 ms|27.26 ms|31.76 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|224.43 ms|105.27 ms|98.85 ms|181.02 ms|184.94 ms|158.90 ms|
|sass|251.47 ms|238.99 ms|240.28 ms|215.34 ms|256.08 ms|240.43 ms|
|styled-components|246.24 ms|225.21 ms|242.95 ms|208.11 ms|230.48 ms|230.60 ms|
|typestyle|90.24 ms|81.55 ms|92.84 ms|78.91 ms|86.93 ms|86.10 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete 500 consecutive requests

---

#### Simple Component

500 requests to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|612.00 ms|416.00 ms|413.00 ms|356.00 ms|20640.00 ms|4487.40 ms|
|sass|512.00 ms|354.00 ms|409.00 ms|331.00 ms|1204.00 ms|562.00 ms|
|styled-components|460.00 ms|360.00 ms|372.00 ms|329.00 ms|403.00 ms|384.80 ms|
|typestyle|370.00 ms|430.00 ms|341.00 ms|367.00 ms|419.00 ms|385.40 ms|


---

#### Long Table Component

500 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|4. run|5. run|average|
|------|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|605.00 ms|409.00 ms|449.00 ms|348.00 ms|520.00 ms|466.20 ms|
|sass|523.00 ms|403.00 ms|481.00 ms|368.00 ms|417.00 ms|438.40 ms|
|styled-components|412.00 ms|425.00 ms|373.00 ms|358.00 ms|1375.00 ms|588.60 ms|
|typestyle|433.00 ms|434.00 ms|380.00 ms|372.00 ms|1231.00 ms|570.00 ms|


## ToDo

- [x] add sass
- [ ] add aphrodite
- [ ] add emotion
- [x] add styled-components
- [ ] add theming tests
- [x] add better console output while testing
- [x] add chalk for coloring console outputs
- [x] add logging for puppeteer tests

---

## Resources

This repository is based upon the work done here [x_team_css_in_js](https://github.com/Thoughtscript/x_team_css_in_js)
