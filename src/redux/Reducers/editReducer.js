import axios from 'axios'
const initialState = {
    edit: false,
    year: '',
    make: '',
    model: '',
    miles: '',
    id: ''
}

const TOGGLE_EDIT = 'TOGGLE_EDIT'
const UPDATE_YEAR = 'UPDATE_YEAR'
const UPDATE_MAKE = 'UPDATE_MAKE'
const UPDATE_MODEL = 'UPDATE_MODEL'
const UPDATE_MILES = 'UPDATE_MILES'
const SET_CAR = 'SET_CAR'

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_EDIT:
            let newEdit = !state.edit
            return {
                edit: newEdit
            }
        case SET_CAR + '_FULFILLED':
            return {
                year: action.payload.year,
                make: action.payload.make,
                model: action.payload.model,
                miles: action.payload.miles,
                id: action.payload.car_id
            }
        case UPDATE_YEAR:
            return {
                ...state,
                year: action.payload
            }
        case UPDATE_MAKE:
            return {
                ...state,
                make: action.payload
            }
        case UPDATE_MODEL:
            return {
                ...state,
                model: action.payload
            }
        case UPDATE_MILES:
            return {
                ...state,
                miles: action.payload
            }
        default:
            return state
    }
}

export function toggleEdit() {
    return {
        type: TOGGLE_EDIT
    }
}

export function setCar(carId) {
    let result = axios.get(`/car/${carId}`).then(res => res.data)
    return {
        type: SET_CAR,
        payload: result
    }
}

export function updateYear(year) {
    return {
        type: UPDATE_YEAR,
        payload: year
    }
}

export function updateMake(make) {
    return {
        type: UPDATE_MAKE,
        payload: make
    }
}

export function updateModel(model) {
    return {
        type: UPDATE_MODEL,
        payload: model
    }
}

export function updateMiles(miles) {
    return {
        type: UPDATE_MILES,
        payload: miles
    }
}

export default reducer