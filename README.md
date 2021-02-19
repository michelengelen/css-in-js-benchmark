## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|-------|-----:|-----:|
|react-jss|4115 ms|213.239 KB|
|styled-components|3187 ms|188.235 KB|
|typestyle|3398 ms|165.315 KB|


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
|react-jss|41.17 ms|40.52 ms|51.25 ms|44.31 ms|
|styled-components|46.97 ms|49.69 ms|61.00 ms|52.55 ms|
|typestyle|45.65 ms|51.85 ms|39.69 ms|45.73 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|200.31 ms|165.69 ms|184.62 ms|183.54 ms|
|styled-components|214.10 ms|225.22 ms|246.99 ms|228.77 ms|
|typestyle|315.59 ms|305.71 ms|307.60 ms|309.64 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.78 ms|27.78 ms|39.63 ms|42.73 ms|
|styled-components|57.98 ms|6390.21 ms|39.32 ms|2162.50 ms|
|typestyle|48.76 ms|35.67 ms|38.62 ms|41.02 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|194.06 ms|164.23 ms|109.56 ms|155.95 ms|
|styled-components|214.90 ms|266.90 ms|250.22 ms|244.01 ms|
|typestyle|81.25 ms|84.92 ms|82.54 ms|82.90 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.53 ms|27.60 ms|39.45 ms|42.53 ms|
|styled-components|56.96 ms|6389.06 ms|37.82 ms|2161.28 ms|
|typestyle|48.52 ms|35.48 ms|38.42 ms|40.80 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|69.60 ms|59.15 ms|68.59 ms|65.78 ms|
|styled-components|105.05 ms|136.64 ms|119.59 ms|120.43 ms|
|typestyle|60.81 ms|62.20 ms|59.68 ms|60.89 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.59 ms|27.64 ms|39.48 ms|42.57 ms|
|styled-components|56.99 ms|6389.10 ms|37.86 ms|2161.32 ms|
|typestyle|48.55 ms|35.53 ms|38.48 ms|40.85 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|69.63 ms|59.18 ms|68.62 ms|65.81 ms|
|styled-components|105.09 ms|136.69 ms|119.62 ms|120.47 ms|
|typestyle|60.82 ms|62.23 ms|59.69 ms|60.91 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|60.78 ms|27.79 ms|39.64 ms|42.74 ms|
|styled-components|57.99 ms|6390.21 ms|39.32 ms|2162.51 ms|
|typestyle|48.77 ms|35.70 ms|38.62 ms|41.03 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|194.07 ms|164.23 ms|109.56 ms|155.96 ms|
|styled-components|214.91 ms|266.91 ms|250.23 ms|244.02 ms|
|typestyle|81.26 ms|84.93 ms|82.55 ms|82.91 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete 2000 consecutive requests

---

#### Simple Component

2000 requests to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|1809.00 ms|1564.00 ms|1376.00 ms|1583.00 ms|
|styled-components|1692.00 ms|1401.00 ms|1612.00 ms|1568.33 ms|
|typestyle|1540.00 ms|1577.00 ms|1439.00 ms|1518.67 ms|


---

#### Long Table Component

2000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|react-jss|2046.00 ms|1574.00 ms|1877.00 ms|1832.33 ms|
|styled-components|1482.00 ms|1893.00 ms|1485.00 ms|1620.00 ms|
|typestyle|1857.00 ms|1557.00 ms|1832.00 ms|1748.67 ms|

---

## ToDo

- [ ] add sass
- [ ] add aphrodite
- [ ] add emotion
- [x] add styled-components
- [ ] add theming tests
- [ ] add better console output while testing
- [ ] add chalk for coloring console outputs

---

## Resources

This repository is based upon the work done here [x_team_css_in_js](https://github.com/Thoughtscript/x_team_css_in_js)
