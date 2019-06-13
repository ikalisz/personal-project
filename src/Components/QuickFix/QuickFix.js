import React, {Component} from 'react'
import styled from 'styled-components'
import {setCar} from '../../redux/Reducers/editReducer'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {connect} from 'react-redux'
import axios from 'axios'

class QuickFix extends Component {
    constructor() {
        super()
        this.state = {
            fixCategory: 'Oil Change',
            fixDetails: '',
            date: ''
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params
        const newId = +id
        axios.get('/repair/date').then(res => {
            let curDate = res.data[0].current_date
            curDate = curDate.split('').splice(0, 10).join('')
            this.setState({date: curDate})
        })
        this.props.changeLoading()
        this.props.setCar(newId)
        this.props.changeLoading()
    }
    handleUpdateCategory = (event) => {
        this.setState({fixCategory: event.target.value})
    }
    handleDetailsUpdate = (details) => this.setState({fixDetails: details})
    handleSubmitRepair = () => {
        axios.post(`/repairs/${this.props.car.id}`, {
            fix: this.state.fixDetails, 
            fixCategory: this.state.fixCategory,
            carYear: this.props.car.year,
            carMake: this.props.car.make,
            carModel: this.props.car.model,
            date: this.state.date
        })
        .then(res => {
            this.props.history.push('/')
        })
    }
    render() {
        return (
            <FixContainer>
                <FormContainer onSubmit={e => e.preventDefault()}>
                    <CarDisplay>Car: {this.props.car.year} {this.props.car.make} {this.props.car.model}</CarDisplay>
                    <FixType>
                        <FixTypeText>Fix Type</FixTypeText>
                        <FixLabel>
                            <FixTypeInput value={this.state.fixCategory} onChange={this.handleUpdateCategory} >
                                <FixCategory value='Oil Change'>Oil Change</FixCategory>
                                <FixCategory value='Tire Change'>Tire Change</FixCategory>
                                <FixCategory value='Tire Rotation'>Tire Rotation</FixCategory>
                                <FixCategory value='Other'>Other</FixCategory>
                            </FixTypeInput>
                        </FixLabel>
                    </FixType>
                    <FixDetailText>Details</FixDetailText>
                    <FixDetailInput value={this.state.fixDetails} onChange={e => this.handleDetailsUpdate(e.target.value)} />
                    <FixSubmitButton type='submit' onClick={this.handleSubmitRepair}>Submit Fix</FixSubmitButton>
                </FormContainer>
            </FixContainer>
        )
    }
}

const FixContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormContainer = styled.form`
    height: 90%;
    width: 90%;
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const CarDisplay = styled.h4`
    margin: 0;
    width: 90%;
`
const FixType = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FixTypeText = styled.h4`
    margin: 0;
`

const FixTypeInput = styled.select`
    :focus {
        outline-color: pink;
    }
`

const FixCategory = styled.option`
    :focus {
        outline-color: pink;
    }
`

const FixLabel = styled.label`
    :focus {
        outline-color: pink;
    }
`

const FixDetailText = styled.h4`
    margin: 0;
`

const FixDetailInput = styled.textarea`
    resize: none;
    width: 90%;
    height: 40%;
    :focus {
        outline-color: pink;
    }
`
const FixSubmitButton = styled.button``

function mapStateToProps(state) {
    return {
        car: state.update,

    }
}

export default connect(mapStateToProps, {setCar, changeLoading})(QuickFix)