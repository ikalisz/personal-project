import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {getCars} from '../../redux/Reducers/carReducer'
import DisplayCar from './DisplayCar'
import axios from 'axios'

class Garage extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        axios.get('/auth/user')
        .then(res => {
            this.props.getCars()
        })
        .catch(err => {
            window.alert(err.response.data)
            this.props.history.push('/user/login')
        })
    }
    render() {
        console.log(this.props)
        const cars = this.props.cars.cars.map((car, i) => {
            return <DisplayCar key={i} id={car.car_id} year={car.year} make={car.make} model={car.model} miles={car.miles} />
        })
        return (
            <GarageContainer>
                {cars}
            </GarageContainer>
        )
    }
}

const GarageContainer = styled.main`
    min-height: 100px;
    max-height: 65vh;
    overflow: scroll;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function mapStateToProps(state) {
    return {
        user: state.user,
        cars: state.car
    }
}

export default connect(mapStateToProps, {changeLoading, getCars})(Garage)