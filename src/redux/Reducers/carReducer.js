import axios from 'axios'

const initialState = {
    cars: [{
        year: 2000,
        make: "dodge",
        model: "neon"
    }]
}

const GET_CARS = 'GET_CARS'

export const getCars = () => {
    let cars = axios.get('/car/display').then(res => res.data)
    return {
        type: GET_CARS,
        cars: cars
    }
}

function reducer(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case GET_CARS + '_FULFILLED':
            console.log(action.cars)
            return {
                ...state,
                cars: action.cars
            }
        case GET_CARS + '_PENDING':
            console.log('Pending')
            return {
                ...state
            }
        default:
            console.log('Default')
            return state
    }
}



export default reducer