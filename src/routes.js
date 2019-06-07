import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import Profile from './Components/Profile/Profile'
import Garage from './Components/MyGarage/MyGarage'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/register' component={Register} />
        <Route path='/user/profile' component={Profile} />
        <Route exact path='/garage' component={Garage} />
        <Route component={NotFound} />
    </Switch>
)