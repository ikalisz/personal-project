const initialState = {
    miles: undefined,
    year: undefined,
    make: '',
    model: '',
    pic: '',
}

const UPDATE_MILES = 'UPDATE_MILES'
const UPDATE_YEAR = 'UPDATE_YEAR'
const UPDATE_MAKE = 'UPDATE_MAKE'
const UPDATE_MODEL = 'UPDATE_MODEL'
const RESET_CAR = 'RESET_CAR'

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MILES:
            return {
                ...state,
                miles: action.payload
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
        case RESET_CAR:
            return {
                miles: '',
                year: '',
                make: '',
                model: '',
                pic: ''
            }
        default:
            return state
    }
}

export function updateMiles(miles) {
    return {
        type: UPDATE_MILES,
        payload: miles
    }
}

export function updateYear(year) {
    console.log(year)
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

export function resetCar() {
    return {
        type: RESET_CAR
    }
}

export default reducer