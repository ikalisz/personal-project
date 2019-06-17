import axios from 'axios'

const initialState = {
    repairs: [],
    repairsPending: [],
    repairsAccepted: [],
    repairsOngoing: [],
    repairsFinished: []
}

const GET_REPAIRS = 'GET_REPAIRS'
const GET_REPAIRS_PENDING = 'GET_REPAIRS_PENDING'
const GET_REPAIRS_ACCEPTED = 'GET_REPAIRS_ACCEPTED'
const GET_REPAIRS_ONGOING = 'GET_REPAIRS_ONGOING'
const GET_REPAIRS_FINISHED = 'GET_REPAIRS_FINISHED'

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_REPAIRS + '_FULFILLED':
            return {
                repairs: action.payload
            }
        case GET_REPAIRS_PENDING + '_FULFILLED':
            return {
                repairsPending: action.payload
            }
        case GET_REPAIRS_ACCEPTED + '_FULFILLED':
            return {
                repairsAccepted: action.payload
            }
        case GET_REPAIRS_ONGOING + '_FULFILLED':
            return {
                repairsOngoing: action.payload
            }
        case GET_REPAIRS_FINISHED + '_FULFILLED':
            return {
                repairsFinished: action.payload
            }
        default:
            return state
    }
}

export function getRepairs() {
    let repairs = axios.get('/user/repairs').then(res => res.data)
    return {
        type: GET_REPAIRS,
        payload: repairs
    }
}

export function getRepairsPending(){
    let repairs = axios.get('/user/repairs/pending').then(res => res.data)
    return {
        type: GET_REPAIRS_PENDING,
        payload: repairs
    }
}

export function getRepairsAccepted() {
    let repairs = axios.get('/user/repairs/accepted').then(res => res.data)
    return {
        type: GET_REPAIRS_ACCEPTED,
        payload: repairs
    }
}

export function getRepairsOngoing() {
    let repairs = axios.get('/user/repairs/ongoing').then(res => res.data)
    return {
        type: GET_REPAIRS_ONGOING,
        payload: repairs
    }
}

export function getRepairsFinished() {
    let repairs = axios.get('/user/repairs/finished').then(res => res.data)
    return {
        type: GET_REPAIRS_FINISHED,
        payload: repairs
    }
}

export default reducer