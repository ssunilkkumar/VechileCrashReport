import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Vehicle } from './Vehicle'

export const Routes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>    
                </Route>
                <Route path="/vehicle/:id">
                    <Vehicle/>
                </Route>
                <Route>
                    <h3>
                        error
                    </h3>
                </Route>
            </Switch>
        </div>
    )
}
