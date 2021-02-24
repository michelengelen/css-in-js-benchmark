## css-in-js-benchmark

#### Command to build all test-apps

```bash
npm run build-all
```

### Results from webpack builds

---

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

!~!FirstMeaningfulPaintHome!~!

request to `/table`

!~!FirstMeaningfulPaintTable!~!

**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`LayoutCount`

request to `/`

!~!LayoutCountHome!~!

request to `/table`

!~!LayoutCountTable!~!

---

`LayoutDuration`

request to `/`

!~!LayoutDurationHome!~!

request to `/table`

!~!LayoutDurationTable!~!

---

`RecalcStyleCount`

request to `/`

!~!RecalcStyleCountHome!~!

request to `/table`

!~!RecalcStyleCountTable!~!

---

`RecalcStyleDuration`

request to `/`

!~!RecalcStyleDurationHome!~!

request to `/table`

!~!RecalcStyleDurationTable!~!

---

`ScriptDuration`

request to `/`

!~!ScriptDurationHome!~!

request to `/table`

!~!ScriptDurationTable!~!

---

`TaskDuration`

request to `/`

!~!TaskDurationHome!~!

request to `/table`

!~!TaskDurationTable!~!

---

`domComplete`

request to `/`

!~!domCompleteHome!~!

request to `/table`

!~!domCompleteTable!~!

The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

!~!domInteractiveHome!~!

request to `/table`

!~!domInteractiveTable!~!

The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

!~!domContentLoadedEventEndHome!~!

request to `/table`

!~!domContentLoadedEventEndTable!~!

The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

!~!durationHome!~!

request to `/table`

!~!durationTable!~!

In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

### Results from Express JS Test

Time To Complete !~!numberOfRequests!~! consecutive requests

---

#### Simple Component

!~!numberOfRequests!~! requests to `/`

!~!numberOfHomeRequestsResults!~!

---

#### Long Table Component

!~!numberOfRequests!~! requests to `/table` (rendering a table with 500 rows)

!~!numberOfTableRequestsResults!~!

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
