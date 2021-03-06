## CSS-in-JS libraries vs SCSS/CSS

### Feature comparison

| library           | injection | property syntax | dynamic theming       | extending styles | custom classNames | cascading styles | pros                           | cons                         |
|:------------------|:----------|:----------------|:----------------------|:-----------------|:------------------|:-----------------|:-------------------------------|:-----------------------------|
| @emotion/styled   | dynamic   | both            | ✓                     | ✓                | -                 | ✓                | can separate styling in files  | big library size             |
| react-jss         | dynamic   | camelCase       | ✓                     | ✓                | ✓ (prefixed)      | ✓                | can separate styling in files  | big library size             |
| sass              | static    | SCSS-syntax     | ✓ (dynamic variables) | ✓                | ✓                 | ✓                | CSS-Module approach            | relatively slow compile time |
| styled-components | dynamic   | SCSS-syntax     | ✓                     | ✓                |                   | ✓                | easier to follow semantic HTML | big library size             |
| treat             | static    | SCSS-syntax     | ✓ (increases runtime) | ✓                |                   | ✓                | very small package size        | low usage rates + acceptance |
| typestyle         | static    | camelCase       | ✓                     | ✓                |                   | ✓                | typesafe + fast scripts        | very slow layout/painting    |

it really comes down to picking the right tool for the use-case. Every package does a something better than others and is worse in a different aspect.

## Examples

There is a file for each library which outlines APIs, more sophisticate pros/cons, package details and so on.

[react-jss](./features-react-jss.md)
