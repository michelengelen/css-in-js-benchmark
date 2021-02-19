'use strict'

import React from 'react'
import {style} from 'typestyle'
import {exampleStyles} from '../../testStyles';

const example = style(exampleStyles)

const Example = () => <div className={example}>Hello World!</div>

export default Example
