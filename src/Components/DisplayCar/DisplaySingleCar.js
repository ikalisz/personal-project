import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import styled from 'styled-components'


function DisplaySingleCar(props) {
    let result = props.cars.filter(car => {
        return car.car_id === +props.match.params.id
    })
    let carDisplay = result[0]
    function toUpdate () {
        props.history.push(`/update/${carDisplay.car_id}`)
    }
    function toQuickFix() {
        props.history.push(`/quickfix/${carDisplay.car_id}`)
    }
    return (
        <Container>
            {carDisplay ?
                <DisplayCarBox>
                    <img src="https://via.placeholder.com/150" alt="" />
                    <CarInfo>{carDisplay.year} {carDisplay.make} {carDisplay.model}</CarInfo>
                    <ModList>Mod list</ModList>
                    <EditInfo onClick={toUpdate}>Edit Info</EditInfo>
                    <QuickFix onClick={toQuickFix}>Quick Fix</QuickFix>
                </DisplayCarBox>
                :
                <Redirect to='/garage' />
            }
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DisplayCarBox = styled.div`
    height: 90%;
    width: 90%;
    border: 1px solid black;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 1000px) {
        width: 60%;
    }
`

const CarInfo = styled.h3`
`

const ModList = styled.button`
    height: 6%;
    width: 25%;
`

const EditInfo = styled.button`
    height: 6%;
    width: 25%;
`

const QuickFix = styled.button`
    height: 6%;
    width: 25%;
`

function mapStateToProps (state) {
    return state.car
}

export default withRouter(connect(mapStateToProps)(DisplaySingleCar))