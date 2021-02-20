## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|-------|-----:|-----:|
|sass|4079 ms|213.239 KB|
|react-jss|4125 ms|213.239 KB|
|styled-components|3549 ms|188.235 KB|
|typestyle|3598 ms|165.315 KB|


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
|sass|40.87 ms|52.15 ms|55.22 ms|49.41 ms|
|react-jss|48.79 ms|51.38 ms|53.27 ms|51.15 ms|
|styled-components|58.89 ms|62.70 ms|56.43 ms|59.34 ms|
|typestyle|49.69 ms|44.02 ms|53.44 ms|49.05 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|218.97 ms|247.22 ms|226.65 ms|230.95 ms|
|react-jss|225.19 ms|199.79 ms|197.53 ms|207.50 ms|
|styled-components|272.88 ms|246.41 ms|250.49 ms|256.59 ms|
|typestyle|276.54 ms|321.18 ms|270.52 ms|289.42 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|70.33 ms|30.73 ms|38.32 ms|46.46 ms|
|react-jss|53.74 ms|29.24 ms|36.45 ms|39.81 ms|
|styled-components|52.96 ms|28.78 ms|29.41 ms|37.05 ms|
|typestyle|48.63 ms|27.84 ms|25.99 ms|34.15 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|238.49 ms|247.41 ms|262.43 ms|249.44 ms|
|react-jss|211.78 ms|195.28 ms|208.92 ms|205.33 ms|
|styled-components|272.27 ms|253.47 ms|248.41 ms|258.05 ms|
|typestyle|93.09 ms|125.72 ms|77.86 ms|98.89 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|59.23 ms|29.60 ms|37.88 ms|42.24 ms|
|react-jss|53.55 ms|29.06 ms|36.25 ms|39.62 ms|
|styled-components|51.86 ms|28.34 ms|28.92 ms|36.37 ms|
|typestyle|48.42 ms|27.64 ms|25.75 ms|33.93 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|115.74 ms|122.11 ms|126.29 ms|121.38 ms|
|react-jss|82.16 ms|66.81 ms|72.50 ms|73.82 ms|
|styled-components|144.78 ms|123.58 ms|117.31 ms|128.56 ms|
|typestyle|68.81 ms|102.69 ms|57.02 ms|76.17 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|59.27 ms|29.63 ms|37.92 ms|42.27 ms|
|react-jss|53.58 ms|29.10 ms|36.29 ms|39.66 ms|
|styled-components|51.89 ms|28.38 ms|28.96 ms|36.41 ms|
|typestyle|48.46 ms|27.68 ms|25.79 ms|33.97 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|115.83 ms|122.15 ms|126.32 ms|121.43 ms|
|react-jss|82.23 ms|66.84 ms|72.55 ms|73.87 ms|
|styled-components|144.80 ms|123.63 ms|117.35 ms|128.59 ms|
|typestyle|68.83 ms|102.72 ms|57.05 ms|76.20 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|70.33 ms|30.74 ms|38.32 ms|46.46 ms|
|react-jss|53.74 ms|29.27 ms|36.46 ms|39.82 ms|
|styled-components|52.96 ms|28.79 ms|29.41 ms|37.06 ms|
|typestyle|48.64 ms|27.85 ms|26.00 ms|34.16 ms|


request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|238.50 ms|247.42 ms|262.44 ms|249.45 ms|
|react-jss|211.78 ms|195.29 ms|208.92 ms|205.33 ms|
|styled-components|272.28 ms|253.47 ms|248.42 ms|258.06 ms|
|typestyle|93.10 ms|125.73 ms|77.88 ms|98.90 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete 1000 consecutive requests

---

#### Simple Component

1000 requests to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|976.00 ms|771.00 ms|20660.00 ms|7469.00 ms|
|react-jss|824.00 ms|814.00 ms|1480.00 ms|1039.33 ms|
|styled-components|863.00 ms|710.00 ms|783.00 ms|785.33 ms|
|typestyle|834.00 ms|790.00 ms|1652.00 ms|1092.00 ms|


---

#### Long Table Component

1000 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
|sass|896.00 ms|832.00 ms|1461.00 ms|1063.00 ms|
|react-jss|890.00 ms|918.00 ms|1542.00 ms|1116.67 ms|
|styled-components|891.00 ms|823.00 ms|1732.00 ms|1148.67 ms|
|typestyle|849.00 ms|714.00 ms|1285.00 ms|949.33 ms|


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
