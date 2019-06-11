import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {getCars} from '../../redux/Reducers/carReducer'
import {resetMenu} from '../../redux/Reducers/menuReducer'
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
            this.props.resetMenu()
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
            <MyGarage>
            <ButtonContainer>
                <AddCar onClick={this.addCar}>Add Car</AddCar>
            </ButtonContainer>
            <GarageContainer>
                {cars}
            </GarageContainer>
            </MyGarage>
        )
    }
}

const GarageContainer = styled.main`
    height: 60vh;
    overflow-y: scroll;
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
    
`
const ButtonContainer = styled.div`
    height: 5vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`
const MyGarage = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

function mapStateToProps(state) {
    return {
        user: state.user,
        cars: state.car
    }
}

export default connect(mapStateToProps, {changeLoading, getCars, resetMenu})(Garage)