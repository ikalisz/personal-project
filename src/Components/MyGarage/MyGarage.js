import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {getCars} from '../../redux/Reducers/carReducer'
import {toggleMenu} from '../../redux/Reducers/menuReducer'
import DisplayCar from './DisplayCar'
import axios from 'axios'

class Garage extends Component {
    componentDidMount() {
        axios.get('/auth/user')
        .then(res => {
            this.props.getCars()
        })
        .catch(err => {
            this.props.history.push('/user/login')
            this.props.toggleMenu()
            window.alert(err.response.data)
        })
    }
    addCar = () => {
        this.props.history.push('/garage/add')
    }
    render() {
        console.log(this.props)
        const cars = this.props.cars.cars.map((car, i) => {
            return <DisplayCar key={i} id={car.car_id} year={car.year} make={car.make} model={car.model} miles={car.miles} />
        })
        return (
            <GarageContainer>
                <AddCar onClick={this.addCar} />
                {cars}
            </GarageContainer>
        )
    }
}

const GarageContainer = styled.main`
    min-height: 100px;
    max-height: calc(65vh - 50px);
    overflow: scroll;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: pink;
`

const AddCar = styled.section`
    height: 30px;
    width: 100px;
    border: black solid 2px;
    margin-top: 10px;
    margin-bottom: 10px;
`

function mapStateToProps(state) {
    return {
        user: state.user,
        cars: state.car
    }
}

export default connect(mapStateToProps, {changeLoading, getCars, toggleMenu})(Garage)