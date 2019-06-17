import axios from 'axios'

const initialState = {
    cars: []
}

const GET_CARS = 'GET_CARS'

export function getCars() {
    const cars = axios.get('/car/display').then(res => res.data)
    return {
        type: GET_CARS,
        payload: cars
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARS + '_PENDING':
            return {
                ...state
            }
        case GET_CARS + '_FULFILLED':
            return {
                ...state,
                cars: [...action.payload]
            }
        case GET_CARS + '_REJECTED':
            return state
        default:
            return state
    }
}



export default reducer