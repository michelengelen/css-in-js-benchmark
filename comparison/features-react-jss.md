## react-jss

### setup

#### Installing

When using npm 

```bash
npm install react-jss
```

When using yarn

```bash
yarn add react-jss
```

There are no additional packages needed for it to work out-of-the-box.
There are some plugins that can potentially be added, but the most popular ones are already integrated with it.

#### bundling

No additonal webpack/babel config needed

### API

```jsx
// Button.jsx
import React from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      fontWeight: 'bold'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})

const Button = ({children}) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}
```

It is also possible to define the styles in a separate file as a typical Object, exported members, or default export

```javascript
// Button.styles.js
export const myButton = {
    color: 'green',
        margin: {
        top: 5,
            right: 0,
            bottom: 0,
            left: '1rem'
    },
    '& span': {
        fontWeight: 'bold'
    }
};
export const myLabel = {
    fontStyle: 'italic'
};
```

And then import it in the component file

```jsx
// Button.jsx

// other imports happening here ...

// import as ref object
import * as styleRefs from './Button.styles.js'

const useStyles = createUseStyles(styleRefs)
```

### Downloads

~200K according to npmtrends.com

### Pros
- widely used and supported
- easy theming with ThemeProvider HOC

### Cons
