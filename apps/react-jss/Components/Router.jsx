'use strict'

/**
 *  Router.
 */

import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import CssInJssComponent from './CssInJsComponent'
import TableComponent from './TableComponent'

export default () =>
    <BrowserRouter>
        <div>
            <nav>
                <ul style={{ listStyle: 'none', marginBottom: 40, padding: 0, textAlign: 'center' }}>
                    <li style={{ display: 'inline-block', padding: 12, backgroundColor: 'rgba(0, 0, 0, .1)'}}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li style={{ display: 'inline-block', padding: 12, backgroundColor: 'rgba(0, 0, 0, .1)'}}>
                        <Link to={'/table'}>table</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path={'/'} component={CssInJssComponent}/>
                <Route exact path={'/table'} component={TableComponent}/>
            </Switch>
        </div>
    </BrowserRouter>
