import React from 'react'
import { style } from 'typestyle'
import { exampleStyles } from '../../testStyles'

const example = style(exampleStyles)

const Example = () => <div className={example}>typestyle</div>

export default Example
