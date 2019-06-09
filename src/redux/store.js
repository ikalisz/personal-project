import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import loadingReducer from './Reducers/loadingReducer'
import imageSlides from './Reducers/imageSlides'
import userReducer from './Reducers/userReducer'
import carReducer from './Reducers/carReducer'

const rootReducer = combineReducers({
    loaded: imageSlides,
    user: userReducer,
    car : carReducer,
    loading: loadingReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware, logger))
