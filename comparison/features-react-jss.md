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

// ...
```

### Prefixing/customizing classnames

react-jss typically generates unique classnames with the name of the property, but this can be extended by using a name for each styles object used in the `createUseStyles` hook-factory

```jsx
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

```jsx
// Button.jsx

// other imports happening here ...

// import as ref object
import * as styleRefs from './Button.styles.js'

const useStyles = createUseStyles(styleRefs, { name: 'Button' })

const Button = ({children}) => {
    const classes = useStyles()
    return (
        <button className={classes.myButton}>
            <span className={classes.myLabel}>{children}</span>
        </button>
    )
}
```

This will create the following unique and prefixed classnames (or similar): `Button-myButton-1-25` and `Button-myLabel-1-26` with these definitions:

```css
.Button-myButton-1-25 {
  color: green;
  margin: 5px 0 0 1rem;
}
.Button-myButton-1-25 span {
  font-weight: bold;
}
.Button-myLabel-1-26 {
  font-style: italic;
}
```

### Downloads

~200K according to npmtrends.com

### Pros
- widely used and supported
- easy theming with ThemeProvider HOC
- renders and injects only needed classes in runtime

### Cons
- learning curve for extended features (theming, dynamic values, etc.)
- package-size
- performance might suffer for dynamic layout changes and transitions
