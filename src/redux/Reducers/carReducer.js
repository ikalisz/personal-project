import axios from 'axios'

const initialState = {
    cars: [{
        year: 2000,
        make: "dodge",
        model: "neon"
    }]
}

const GET_CARS = 'GET_CARS'

export function getCars() {
    const cars = axios.get('/car/display').then(res => res.data)
    console.log(cars)
    return {
        type: GET_CARS,
        cars: cars
    }
}

function reducer(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case GET_CARS + '_PENDING':
            console.log(action.type)
            console.log('Pending')
            return {
                ...state
            }
        case GET_CARS + '_FULFILLED':
            return {
                ...state,
                cars: action.cars
            }
        case GET_CARS + '_REJECTED':
            return state
        default:
            console.log('Default')
            console.log(action.type)
            return state
    }
}



export default reducer