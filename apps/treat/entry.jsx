/**
 *  Entry.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { TreatProvider } from 'react-treat'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Router from './Components/Router'
import { DummyStorage } from './Components/DummyStorage'

import theme from './theme.treat.js'

ReactDOM.render(
    <TreatProvider theme={theme}>
        <Provider store={createStore(DummyStorage)}>
            <Router />
        </Provider>
    </TreatProvider>,
    document.getElementById('react_app_root')
)
