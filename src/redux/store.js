import {createStore, combineReducers} from 'redux'
import loadingReducer from './Reducers/loadingReducer'
import imageSlides from './Reducers/imageSlides'
import axios from 'axios'

const initialState = {
    username: '',
    id: null,
    email: '',
    phone: null
}

const GET_USER = 'GET_USER'
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PHONE = 'UPDATE_PHONE'

function reducer (state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                username: action.username,
                id: action.id,
                email: action.email,
                phone: action.phone
            }
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case UPDATE_PHONE:
            return {
                ...state,
                phone: action.phone
            }
        default:
            return state
    }
}

export function getUser() {
    let user = axios.get('/auth/user').then(user => user.data)
    return {
        type: GET_USER,
        ...user
    }
}

const rootReducer = combineReducers({
    loaded: imageSlides,
    loading: loadingReducer
})



export default createStore(rootReducer)