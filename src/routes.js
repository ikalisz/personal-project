import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/register' component={Register} />
        <Route component={NotFound} />
    </Switch>
)