'use strict'

/**
 *  Entry.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import Router from './Components/Router'
import {DummyStorage} from './Components/DummyStorage'

import Example from "./Components/CssInJsComponent";

ReactDOM.render(
    (<Provider store={createStore(DummyStorage)}>
        <Example/>
    </Provider>),
    document.getElementById('react_app_root')
)
