import React, {Component} from 'react'
import styled from 'styled-components'
import {updateMiles, updateYear, updateMake, updateModel, resetCar} from '../../redux/Reducers/addCarReducer'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {connect} from 'react-redux'
import axios from 'axios';

class AddCar extends Component {
    submitCar = () => {
        this.props.changeLoading()
        axios.post('/car/register', {
            miles: this.props.addCar.miles,
            year: this.props.addCar.year,
            make: this.props.addCar.make,
            model: this.props.addCar.model
        })
        .then(res => {
            this.props.changeLoading()
            this.props.resetCar()
            this.props.history.push('/garage')
        })
        .catch(err => {
            window.alert(err.response.data)
            this.props.resetCar()
        })
    }
    changeMiles = (e) => {
        this.props.updateMiles(e.target.value)
    }
    render() {
        return (
            <AddFormContainer>
                <AddCarForm onSubmit={(e) => e.preventDefault()}>
                    <InputContainer>Miles: <AddInput type="number" placeholder='Number of miles' onChange={(e) => this.changeMiles(e)} /></InputContainer>
                    <InputContainer>Year: <AddInput type="number" required={true} placeholder='Year of car' onChange={(e) => this.props.updateYear(e.target.value)} /></InputContainer>
                    <InputContainer>Make: <AddInput type="text" placeholder='Make of car' required={true} onChange={(e) => this.props.updateMake(e.target.value)} /></InputContainer>
                    <InputContainer>Model: <AddInput type="text" placeholder='Model of car' required={true} onChange={(e) => this.props.updateModel(e.target.value)} /></InputContainer>
                    <SubmitButton onClick={this.submitCar}>Submit</SubmitButton>
                </AddCarForm>
            </AddFormContainer>
        )
    }
}

const AddFormContainer = styled.div`
    height: 65vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

const AddCarForm = styled.form`
    height: 100%;
    width: 90%;
    background: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const AddInput = styled.input`
`
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`
const SubmitButton = styled.button`

`

function mapStateToProps(state) {
    return {
        addCar: state.addCar,
        user: state.user
    }
}

export default connect(mapStateToProps, {updateMiles, updateYear, updateMake, updateModel, changeLoading, resetCar})(AddCar)