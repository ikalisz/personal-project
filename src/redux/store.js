import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import imageSlides from './Reducers/imageSlides'
import userReducer from './Reducers/userReducer'

const rootReducer = combineReducers({
    loaded: imageSlides,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))