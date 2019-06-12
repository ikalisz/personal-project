import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {setCar, updateYear, updateMake, updateModel, updateMiles} from '../../redux/Reducers/editReducer'

class updateCar extends Component {
    componentDidMount() {
        let id = +this.props.match.params.id
        this.props.changeLoading()
        this.props.setCar(id)
        this.props.changeLoading()
    }
    submitUpdate = () => {
        const {year, make, model, miles, id} = this.props.update
        this.props.changeLoading()
        axios.put(`/car/update/${id}`, {year, make, model, miles})
        .then(res =>{
            this.props.changeLoading()
            this.props.history.push(`/garage`)
        })
        .catch(err => {
            this.props.changeLoading()
        })
    }
    render() {
        return (
            <UpdateForm onSubmit={(e) => e.preventDefault()}>
                <InputText>Year</InputText>
                <UpdateInput value={this.props.update.year} onChange={e => this.props.updateYear(e.target.value)} />
                <InputText>Make</InputText>
                <UpdateInput value={this.props.update.make} onChange={e => this.props.updateMake(e.target.value)} />
                <InputText>Model</InputText>
                <UpdateInput value={this.props.update.model} onChange={e => this.props.updateModel(e.target.value)} />
                <InputText>Miles</InputText>
                <UpdateInput value={this.props.update.miles} onChange={e => this.props.updateMiles(e.target.value)} />
                <UpdateSubmit type='submit' onClick={this.submitUpdate}>Save Changes</UpdateSubmit>
            </UpdateForm>
        )
    }
}

const UpdateSubmit = styled.button`

`

const UpdateForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const UpdateInput = styled.input`
`
const InputText = styled.h3`
    margin: 0;
`

function mapStateToProps(state) {
    return {
        car: state.car,
        update: state.update
    }
}

export default connect(mapStateToProps, {changeLoading, setCar, updateYear, updateMake, updateModel, updateMiles})(updateCar)