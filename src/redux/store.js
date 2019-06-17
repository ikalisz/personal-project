import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import loadingReducer from './Reducers/loadingReducer'
import imageSlides from './Reducers/imageSlides'
import userReducer from './Reducers/userReducer'
import carReducer from './Reducers/carReducer'
import menuReducer from './Reducers/menuReducer'
import addCarReducer from './Reducers/addCarReducer'
import editReducer from './Reducers/editReducer'
import repairReducer from './Reducers/repairReducer'

const rootReducer = combineReducers({
    loaded: imageSlides,
    user: userReducer,
    car : carReducer,
    loading: loadingReducer,
    menu: menuReducer,
    addCar: addCarReducer,
    update: editReducer,
    repairs: repairReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
