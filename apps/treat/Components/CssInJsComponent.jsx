import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './CssInJsComponent.treat'

const Example = () => {
    const styles = useStyles(styleRefs)
    return <div className={styles.example}>treat</div>
}

export default Example
