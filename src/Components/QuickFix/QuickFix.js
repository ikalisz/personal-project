import React, {Component} from 'react'
import styled from 'styled-components'
import {setCar} from '../../redux/Reducers/editReducer'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {connect} from 'react-redux'
import axios from 'axios'
import Select from 'react-select'
import './QuickFix.css'

class QuickFix extends Component {
    constructor() {
        super()
        this.state = {
            fixCategory: 'Select Fix Type...',
            date: '',
            fixDetails: ''
        }
    }
    componentDidMount() {
        this.props.changeLoading()
        const {id} = this.props.match.params
        const newId = +id
        axios.get('/repair/date').then(res => {
            let curDate = res.data[0].current_date
            curDate = curDate.split('').splice(0, 10).join('')
            this.setState({date: curDate})
        })
        this.props.setCar(newId)
        this.props.changeLoading()
    }
    handleUpdateCategory = (value) => {
        console.log(value)
        this.setState({fixCategory: value})
    }
    handleSubmitRepair = () => {
        if (this.state.fixCategory === 'Select Fix Type...') return window.alert('Please select fix type')
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
    handleDetailsUpdate = (details) => this.setState({fixDetails: details})
    render() {
        const options = [
            {value: "Oil Change", label: 'Oil Change'},
            {value: "Tire Change", label: 'Tire Change'},
            {value: "Tire Rotation", label: 'Tire Rotation'},
            {value: "Other", label: 'Other'}
        ]
        console.log(this.state.fixCategory)
        return (
            <FixContainer>
                <FormContainer onSubmit={e => e.preventDefault()}>
                    <CarDisplay>Car: {this.props.car.year} {this.props.car.make} {this.props.car.model}</CarDisplay>
                    <FixType>
                        <FixTypeText>Fix Type:</FixTypeText>
                        <Select options={options} value={{value: this.state.fixCategory, label: this.state.fixCategory}} onChange={value => this.handleUpdateCategory(value.value)} 
                        placeholder='Select Fix Type...'
                        isSearchable={false}
                        className='select'
                        />
                        {/* <label>
                            <select value={this.state.fixCategory} onChange={e => this.handleUpdateCategory(e)} >
                                <option value='Oil Change'>Oil Change</option>
                                <option value='Tire Change'>Tire Change</option>
                                <option value='Tire Rotation'>Tire Rotation</option>
                                <option value='Other'>Other</option>
                            </select>
                        </label> */}
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

const FixTypeInput = styled.select``

const FixCategory = styled.option``

const FixLabel = styled.label``

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