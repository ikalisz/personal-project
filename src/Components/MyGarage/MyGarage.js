import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {changeLoading} from '../../redux/Reducers/userReducer'
import {getCars} from '../../redux/Reducers/carReducer'
import DisplayCar from './DisplayCar'

class Garage extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getCars()
    }
    render() {
        console.log(this.props)
        const cars = this.props.cars.cars.map((car, i) => {
            return <DisplayCar key={i} id={car.car_id} year={car.year} make={car.make} model={car.model} miles={car.miles} />
        })
        return (
            <div>
                {cars}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        cars: state.car
    }
}

export default connect(mapStateToProps, {changeLoading, getCars})(Garage)