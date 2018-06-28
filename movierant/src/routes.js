import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BusquedaDePeliculas } from './components/busquedaDePeliculas'

export const TomatesTruchosRoutes = (props) => (
    <Router>
        <Switch>
            <Route exact path="/" component={BusquedaDePeliculas} />
        </Switch>
    </Router>
)