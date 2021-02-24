## CSS-in-JS libraries vs SCSS/CSS

### Feature comparison

| library           | injection | property syntax | dynamic theming       | extending styles | cascading styles | pros                           | cons                         |
|:------------------|:----------|:----------------|:----------------------|:-----------------|:-----------------|:-------------------------------|:-----------------------------|
| react-jss         | dynamic   | camelCase       | ✓                     | ✓                | ✓                | can separate styling in files  | big library size             |
| sass              | static    | SCSS-syntax     | ✓ (dynamic variables) | ✓                | ✓                | CSS-Module approach            | relatively slow compile time |
| styled-components | dynamic   | SCSS-syntax     | ✓                     | ✓                | ✓                | easier to follow semantic HTML | big library size             |
| treat             | static    | SCSS-syntax     | ✓ (increases runtime) | ✓                | ✓                | very small package size        | low acceptance               |
| typestyle         | static    | camelCase       | ✓                     | ✓                | ✓                | typesafe + fast scripts        | very slow layout/painting    |

