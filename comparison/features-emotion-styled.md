## @emotion/styled

### setup

#### Installing

When using npm 

```bash
npm install @emotion/styled
```

When using yarn

```bash
yarn add @emotion/styled
```

There are no additional packages needed for it to work out-of-the-box.

#### bundling

No additonal webpack/babel config needed

### API

The API is heavily influenced by the packages `styled-components` and `glamorous`. Therefore, it is possible to use `styled` either with `tagged template literals` and normal `SCSS-syntax` or just as a function with javascripts `object literal syntax`

#### tagged template literal with SCSS-syntax

```javascript
// Button.jsx
import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
    color: green;
    margin: 5 0 0 1rem;

    & span {
        font-weight: bold;
    }
`

// ...
```

#### function with object literal syntax

```jsx
// Button.jsx
import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button({
    color: 'green',
    margin: '5 0 0 1rem',
    '& span': {
        fontWeight: 'bold'
    },
});

// ...
```

Both will create the same result.

### Downloads

~2.900.000 / week (according to npmtrends.com)

### Pros
- various ways to use it
- very performant

### Cons
- needs a strict ruleset to keep with the variation decided upon

### Official Docs

[@emotion/styled documentation](https://emotion.sh/docs/styled)
