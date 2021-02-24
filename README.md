## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

|library|build time|build size|
|:-----|-----:|-----:|
|react-jss|4178 ms|234.411 KB|
|sass|4286 ms|234.411 KB|
|styled-components|3705 ms|209.407 KB|
|treat|4257 ms|234.411 KB|
|typestyle|3369 ms|186.487 KB|


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
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|36.71 ms|47.71 ms|34.79 ms|42.41 ms|41.33 ms|40.59 ms|
|sass|46.88 ms|50.47 ms|47.82 ms|56.67 ms|55.62 ms|51.49 ms|
|styled-components|52.14 ms|47.50 ms|55.39 ms|52.71 ms|53.10 ms|52.17 ms|
|treat|71.17 ms|69.70 ms|65.34 ms|65.69 ms|69.16 ms|68.21 ms|
|typestyle|55.01 ms|49.85 ms|63.20 ms|58.88 ms|60.13 ms|57.41 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|197.13 ms|180.35 ms|208.37 ms|189.61 ms|193.17 ms|193.73 ms|
|sass|259.71 ms|239.42 ms|239.04 ms|229.30 ms|246.73 ms|242.84 ms|
|styled-components|245.07 ms|217.28 ms|242.24 ms|236.48 ms|224.99 ms|233.21 ms|
|treat|219.67 ms|200.59 ms|208.04 ms|229.79 ms|215.83 ms|214.78 ms|
|typestyle|306.54 ms|297.18 ms|300.79 ms|308.07 ms|306.38 ms|303.79 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded. It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`LayoutCount`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|react-jss|2|3|3|3|3|
|sass|2|2|2|2|2|
|styled-components|2|2|2|2|2|
|treat|3|3|3|3|3|
|typestyle|3|3|3|3|3|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|react-jss|3|5|5|4|4|
|sass|4|3|3|3|3|
|styled-components|3|3|3|4|3|
|treat|4|4|4|4|5|
|typestyle|6|5|5|5|6|


---

`LayoutDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|0.54 ms|0.52 ms|0.51 ms|0.53 ms|0.61 ms|0.54 ms|
|sass|0.42 ms|0.36 ms|0.44 ms|0.41 ms|0.41 ms|0.41 ms|
|styled-components|0.35 ms|0.43 ms|0.38 ms|0.41 ms|0.43 ms|0.40 ms|
|treat|0.70 ms|0.46 ms|0.44 ms|0.44 ms|0.51 ms|0.51 ms|
|typestyle|0.47 ms|0.55 ms|0.45 ms|0.55 ms|0.48 ms|0.50 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|66.45 ms|63.74 ms|68.88 ms|64.94 ms|67.60 ms|66.32 ms|
|sass|73.88 ms|68.29 ms|66.73 ms|61.81 ms|68.02 ms|67.75 ms|
|styled-components|68.38 ms|57.44 ms|66.28 ms|65.55 ms|57.15 ms|62.96 ms|
|treat|66.98 ms|56.47 ms|55.81 ms|69.33 ms|60.27 ms|61.77 ms|
|typestyle|147.87 ms|138.22 ms|140.03 ms|147.66 ms|146.55 ms|144.07 ms|


---

`RecalcStyleCount`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|react-jss|2|3|3|3|3|
|sass|3|2|3|2|2|
|styled-components|2|3|2|3|3|
|treat|3|3|3|3|3|
|typestyle|3|3|3|3|3|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|react-jss|4|6|6|5|5|
|sass|5|3|4|3|3|
|styled-components|3|4|3|5|4|
|treat|5|5|5|5|6|
|typestyle|6|5|5|5|6|


---

`RecalcStyleDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|0.34 ms|0.55 ms|0.40 ms|0.89 ms|0.44 ms|0.52 ms|
|sass|0.42 ms|0.32 ms|0.44 ms|0.37 ms|0.40 ms|0.39 ms|
|styled-components|0.33 ms|0.40 ms|0.38 ms|0.46 ms|0.44 ms|0.40 ms|
|treat|0.49 ms|0.39 ms|0.37 ms|0.41 ms|0.42 ms|0.42 ms|
|typestyle|0.42 ms|0.46 ms|0.41 ms|0.43 ms|0.41 ms|0.43 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|38.03 ms|35.53 ms|39.76 ms|39.02 ms|39.12 ms|38.29 ms|
|sass|42.36 ms|37.57 ms|38.86 ms|32.92 ms|37.93 ms|37.93 ms|
|styled-components|39.07 ms|33.79 ms|40.35 ms|33.20 ms|33.76 ms|36.03 ms|
|treat|36.28 ms|33.99 ms|32.94 ms|40.33 ms|38.24 ms|36.35 ms|
|typestyle|72.63 ms|69.71 ms|66.86 ms|72.41 ms|72.13 ms|70.75 ms|


---

`ScriptDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|6.60 ms|8.16 ms|6.44 ms|8.42 ms|6.75 ms|7.27 ms|
|sass|8.02 ms|6.60 ms|7.51 ms|7.68 ms|8.25 ms|7.61 ms|
|styled-components|7.58 ms|4.91 ms|8.30 ms|8.09 ms|8.21 ms|7.42 ms|
|treat|26.11 ms|26.97 ms|26.21 ms|24.88 ms|26.32 ms|26.10 ms|
|typestyle|21.66 ms|6.03 ms|24.40 ms|22.24 ms|22.37 ms|19.34 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|64.97 ms|55.58 ms|70.17 ms|62.03 ms|62.07 ms|62.97 ms|
|sass|110.69 ms|101.70 ms|105.92 ms|103.91 ms|110.61 ms|106.57 ms|
|styled-components|108.55 ms|98.13 ms|104.82 ms|105.39 ms|105.52 ms|104.48 ms|
|treat|101.54 ms|97.35 ms|100.45 ms|100.12 ms|100.72 ms|100.04 ms|
|typestyle|73.57 ms|60.79 ms|80.43 ms|74.70 ms|74.45 ms|72.79 ms|


---

`TaskDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|49.06 ms|32.78 ms|53.07 ms|51.60 ms|54.37 ms|48.17 ms|
|sass|33.93 ms|27.43 ms|32.69 ms|33.62 ms|33.88 ms|32.31 ms|
|styled-components|29.41 ms|26.91 ms|33.92 ms|34.09 ms|34.75 ms|31.82 ms|
|treat|53.11 ms|53.96 ms|61.54 ms|59.02 ms|64.09 ms|58.35 ms|
|typestyle|43.09 ms|32.03 ms|49.10 ms|47.30 ms|47.52 ms|43.81 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|238.58 ms|221.89 ms|253.74 ms|233.67 ms|241.02 ms|237.78 ms|
|sass|297.27 ms|255.99 ms|277.79 ms|268.44 ms|285.66 ms|277.03 ms|
|styled-components|266.87 ms|252.92 ms|266.68 ms|261.66 ms|251.09 ms|259.84 ms|
|treat|279.53 ms|247.84 ms|260.46 ms|280.91 ms|273.26 ms|268.40 ms|
|typestyle|342.69 ms|334.48 ms|342.30 ms|347.07 ms|346.62 ms|342.63 ms|


---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|66.10 ms|40.51 ms|65.25 ms|46.69 ms|42.45 ms|52.20 ms|
|sass|65.30 ms|39.26 ms|40.21 ms|38.07 ms|41.44 ms|44.86 ms|
|styled-components|57.02 ms|39.95 ms|36.96 ms|38.47 ms|37.34 ms|41.95 ms|
|treat|56.45 ms|33.29 ms|55.24 ms|37.10 ms|31.39 ms|42.69 ms|
|typestyle|51.02 ms|35.63 ms|27.09 ms|28.61 ms|28.61 ms|34.19 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|234.05 ms|107.73 ms|195.48 ms|205.39 ms|206.41 ms|189.81 ms|
|sass|236.16 ms|230.11 ms|230.26 ms|255.43 ms|250.75 ms|240.54 ms|
|styled-components|222.34 ms|247.51 ms|245.86 ms|270.10 ms|246.66 ms|246.50 ms|
|treat|223.20 ms|199.93 ms|223.52 ms|223.10 ms|197.16 ms|213.38 ms|
|typestyle|87.47 ms|88.97 ms|86.61 ms|93.37 ms|93.69 ms|90.02 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|65.88 ms|40.31 ms|65.04 ms|46.44 ms|42.24 ms|51.98 ms|
|sass|64.11 ms|38.84 ms|38.90 ms|37.63 ms|40.26 ms|43.95 ms|
|styled-components|55.95 ms|39.58 ms|36.53 ms|37.87 ms|36.90 ms|41.37 ms|
|treat|56.27 ms|33.03 ms|55.03 ms|36.87 ms|31.13 ms|42.47 ms|
|typestyle|50.83 ms|35.47 ms|26.90 ms|28.39 ms|28.36 ms|33.99 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|85.46 ms|69.24 ms|69.81 ms|70.68 ms|73.90 ms|73.82 ms|
|sass|120.12 ms|114.42 ms|108.39 ms|122.22 ms|120.85 ms|117.20 ms|
|styled-components|115.94 ms|118.74 ms|119.81 ms|137.95 ms|115.10 ms|121.51 ms|
|treat|97.78 ms|71.55 ms|96.76 ms|84.99 ms|67.00 ms|83.62 ms|
|typestyle|63.70 ms|64.75 ms|62.33 ms|69.24 ms|69.27 ms|65.86 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|65.91 ms|40.35 ms|65.10 ms|46.48 ms|42.28 ms|52.02 ms|
|sass|64.15 ms|38.87 ms|38.95 ms|37.66 ms|40.30 ms|43.99 ms|
|styled-components|55.98 ms|39.62 ms|36.56 ms|37.91 ms|36.93 ms|41.40 ms|
|treat|56.31 ms|33.09 ms|55.07 ms|36.93 ms|31.18 ms|42.51 ms|
|typestyle|50.86 ms|35.50 ms|26.93 ms|28.43 ms|28.40 ms|34.03 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|85.48 ms|69.27 ms|69.84 ms|70.71 ms|73.94 ms|73.85 ms|
|sass|120.15 ms|114.46 ms|108.43 ms|122.28 ms|120.89 ms|117.24 ms|
|styled-components|115.97 ms|118.81 ms|119.86 ms|137.99 ms|115.14 ms|121.56 ms|
|treat|97.84 ms|71.58 ms|96.81 ms|85.02 ms|67.03 ms|83.66 ms|
|typestyle|63.73 ms|64.76 ms|62.37 ms|69.28 ms|69.31 ms|65.89 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|66.10 ms|40.52 ms|65.26 ms|46.70 ms|42.46 ms|52.21 ms|
|sass|65.30 ms|39.26 ms|40.22 ms|38.08 ms|41.44 ms|44.86 ms|
|styled-components|57.03 ms|39.96 ms|36.97 ms|38.47 ms|37.35 ms|41.96 ms|
|treat|56.45 ms|33.29 ms|55.25 ms|37.11 ms|31.39 ms|42.70 ms|
|typestyle|51.02 ms|35.64 ms|27.10 ms|28.62 ms|28.61 ms|34.20 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|234.06 ms|107.73 ms|195.48 ms|205.41 ms|206.41 ms|189.82 ms|
|sass|236.17 ms|230.12 ms|230.26 ms|255.44 ms|250.75 ms|240.55 ms|
|styled-components|222.35 ms|247.52 ms|245.87 ms|270.11 ms|246.68 ms|246.50 ms|
|treat|223.21 ms|199.93 ms|223.53 ms|223.10 ms|197.16 ms|213.39 ms|
|typestyle|87.47 ms|88.98 ms|86.62 ms|93.38 ms|93.70 ms|90.03 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete 500 consecutive requests

---

#### Simple Component

500 requests to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|534.00 ms|372.00 ms|347.00 ms|427.00 ms|369.00 ms|409.80 ms|
|sass|441.00 ms|373.00 ms|343.00 ms|381.00 ms|388.00 ms|385.20 ms|
|styled-components|420.00 ms|378.00 ms|353.00 ms|360.00 ms|353.00 ms|372.80 ms|
|treat|378.00 ms|358.00 ms|376.00 ms|397.00 ms|373.00 ms|376.40 ms|
|typestyle|374.00 ms|381.00 ms|393.00 ms|375.00 ms|377.00 ms|380.00 ms|


---

#### Long Table Component

500 requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|react-jss|505.00 ms|382.00 ms|360.00 ms|472.00 ms|397.00 ms|423.20 ms|
|sass|453.00 ms|369.00 ms|392.00 ms|398.00 ms|407.00 ms|403.80 ms|
|styled-components|426.00 ms|392.00 ms|382.00 ms|425.00 ms|378.00 ms|400.60 ms|
|treat|418.00 ms|393.00 ms|475.00 ms|381.00 ms|391.00 ms|411.60 ms|
|typestyle|418.00 ms|379.00 ms|425.00 ms|417.00 ms|379.00 ms|403.60 ms|


## ToDo

-   [x] add sass
-   [ ] add aphrodite
-   [ ] add emotion
-   [x] add styled-components
-   [ ] add theming tests
-   [x] add better console output while testing
-   [x] add chalk for coloring console outputs
-   [x] add logging for puppeteer tests

---

## Resources

This repository is based upon the work done here [x_team_css_in_js](https://github.com/Thoughtscript/x_team_css_in_js)
