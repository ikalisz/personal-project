import axios from 'axios'
const initialState = {
    username: '',
    id: null,
    email: '',
    phone: null,
    loading: false,
}

const CHANGE_LOADING = 'CHANGE_LOADING'
const GET_USER = 'GET_USER'
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PHONE = 'UPDATE_PHONE'
const SET_USER = 'SET_USER'

function reducer (state = initialState, action) {
    switch(action.type) {
        case GET_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case GET_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }
        case GET_USER + '_FULFILLED':
            return {
                username: action.payload.username,
                id: action.payload.id,
                email: action.payload.email,
                phone: action.payload.phone,
                loading: false
            }
        case SET_USER:
            console.log(action)
            return {
                ...state,
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
        case CHANGE_LOADING:
        let newLoading = !state.loading
        return {
            loading: newLoading 
        }
        default:
            return state
        }
}

export const getUser = () => {
    let user = axios.get('/auth/user').then(userdata => userdata.user)
    return {
        type: GET_USER,
        payload: user
    }
}
export const setUser = (user) => {
    return {
        type: SET_USER,
        username: user.username,
        phone: user.phone,
        email: user.email,
        id: user.id,
    }
}

export function changeLoading() {
    return {
        type: CHANGE_LOADING
    }
}

export default reducer