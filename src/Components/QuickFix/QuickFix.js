import React, {Component} from 'react'
import styled from 'styled-components'
import {setCar} from '../../redux/Reducers/editReducer'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {connect} from 'react-redux'

class QuickFix extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        const {id} = this.props.match.params
        const newId = +id
        console.log(typeof newId)
        this.props.changeLoading()
        this.props.setCar(newId)
        this.props.changeLoading()
    }

    render() {
        console.log(this.props)
        return (
            <FixContainer>
                <FormContainer>
                    <CarDisplay>Car: {this.props.car.year} {this.props.car.make} {this.props.car.model}</CarDisplay>
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
    width: 90%;
`

function mapStateToProps(state) {
    return {
        car: state.update,

    }
}

export default connect(mapStateToProps, {setCar, changeLoading})(QuickFix)