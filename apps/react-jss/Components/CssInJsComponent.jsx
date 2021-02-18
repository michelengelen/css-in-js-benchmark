'use strict'

import React from 'react'
import {createUseStyles} from 'react-jss'

import {exampleStyles} from '../../testStyles'

const useStyles = createUseStyles({example: exampleStyles})

const Example = () => {
    const classes = useStyles()
    return (
        <div className={classes.example}>Hello World!</div>
    )
}

export default Example
