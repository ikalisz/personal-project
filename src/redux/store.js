import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import imageSlides from './Reducers/imageSlides'
import userReducer from './Reducers/userReducer'
import carReducer from './Reducers/carReducer'

const rootReducer = combineReducers({
    loaded: imageSlides,
    user: userReducer,
    car : carReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))