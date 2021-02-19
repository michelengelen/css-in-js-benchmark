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

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!FirstMeaningfulPaintHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!FirstMeaningfulPaintTable!~!

**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domCompleteHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domCompleteTable!~!

The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domInteractiveHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domInteractiveTable!~!

The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domContentLoadedEventEndHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domContentLoadedEventEndTable!~!

The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!durationHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!durationTable!~!

In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete !~!numberOfRequests!~! consecutive requests

---

#### Simple Component

!~!numberOfRequests!~! requests to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!numberOfHomeRequestsResults!~!

---

#### Long Table Component

!~!numberOfRequests!~! requests to `/table` (rendering a table with 500 rows)

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!numberOfTableRequestsResults!~!

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
