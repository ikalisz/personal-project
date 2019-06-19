import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {getCars} from '../../redux/Reducers/carReducer'
import {resetMenu} from '../../redux/Reducers/menuReducer'
import DisplayCar from './DisplayCar'
import axios from 'axios'
import * as Icons from 'react-feather'

class Garage extends Component {
    componentDidMount() {
        this.props.changeLoading()
        axios.get('/auth/user')
        .then(res => {
            this.props.getCars().then(this.props.changeLoading())
        })
        .catch(err => {
            this.props.changeLoading()
            this.props.history.push('/user/login')
            this.props.resetMenu()
            window.alert(err.response.data)
        })
    }
    addCar = () => {
        this.props.history.push('/garage/add')
    }
    render() {
        let url = 'https://via.placeholder.com/150'
        const cars = this.props.cars.cars.map((car, i) => {
            return <DisplayCar key={i} id={car.car_id} year={car.year} make={car.make} model={car.model} miles={car.miles} image={url} />
        })
        return (
            <MyGarage>
                <ButtonContainer>
                    <AddCar onClick={this.addCar}>
                        <Icons.PlusSquare />
                        Add Car
                    </AddCar>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid black;
    @media (min-width: 1000px) {
        height: 75vh;
        width: 70%;
    }
`

const AddCar = styled.div`
    height: 30px;
    width: 100px;
    border: black solid 2px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    :hover {
        color: pink;
        border-color: pink;
        cursor: pointer;
    }
`
const ButtonContainer = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MyGarage = styled.main`
    height: 100%;
    width: 100%;
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

export default connect(mapStateToProps, {changeLoading, getCars, resetMenu})(Garage)