import axios from 'axios'
const initialState = {
    username: '',
    id: null,
    email: '',
    phone: null,
    firstname: '',
    lastname: '',
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PHONE = 'UPDATE_PHONE'
const SET_USER = 'SET_USER'
const RESET_USER = 'RESET_USER'

function reducer (state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            console.log(action)
            return {
                ...state,
                firstname: action.firstname,
                lastname: action.lastname,
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
        case RESET_USER:
            return {
                username: '',
                id: null,
                email: '',
                phone: '',
                firstname: '',
                lastname: ''
            }
        default:
            return state
        }
}

export const resetUser = () => {
    return {
        type: RESET_USER
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        username: user.username,
        phone: user.phone,
        email: user.email,
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname
    }
}

export default reducer