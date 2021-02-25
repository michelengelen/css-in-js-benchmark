import React from 'react'
import { createUseStyles } from 'react-jss'
import { exampleStyles } from '../../testStyles'

const useStyles = createUseStyles({example: exampleStyles})

const Example = () => {
    const classes = useStyles()
    return <div className={classes.example}>react-jss</div>
}

export default Example
