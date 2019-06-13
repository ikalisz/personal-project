import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import Profile from './Components/Profile/Profile'
import Garage from './Components/MyGarage/MyGarage'
import AddCar from './Components/MyGarage/AddCar'
import DisplaySingleCar from './Components/DisplayCar/DisplaySingleCar'
import UpdateCar from './Components/DisplayCar/UpdateCar'
import QuickFix from './Components/QuickFix/QuickFix'
import Repairs from './Components/Repairs/Repairs'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/register' component={Register} />
        <Route path='/user/profile' component={Profile} />
        <Route exact path='/garage' component={Garage} />
        <Route path='/garage/add' component={AddCar} />
        <Route path='/car/:id' component={DisplaySingleCar} />
        <Route path='/update/:id' component={UpdateCar} />
        <Route path='/quickfix/:id' component={QuickFix} />
        <Route path='/user/repairs' component={Repairs} />
        <Route component={NotFound} />
    </Switch>
)