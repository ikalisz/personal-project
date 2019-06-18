import React from 'react'
import styled from 'styled-components'
import {withRouter, Link} from 'react-router-dom'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {getCars} from '../../redux/Reducers/carReducer'
import * as Icons from 'react-feather'
import axios from 'axios'
import {connect} from 'react-redux'


function DisplayCar(props) {
    let {year, miles, make, model, id, image} = props
    function removeCar() {
        props.changeLoading()
        axios.delete(`/car/${id}`)
        .then(res => {
            props.getCars()
            props.changeLoading()
        })
        .catch(err => {
            props.changeLoading()
            window.alert(err.response.data)
        })
    }
    function showCar() {
        return props.history.push(`/car/${id}`)
    }
    return (
        <CarContainer>
            <img src={image} alt="" />
            <ItemList>
                <UtilityButtons>
                    <Icons.Trash2 onClick={removeCar}/>
                    <Icons.ZoomIn onClick={showCar} />
                </UtilityButtons>
                <CarItem>{year} {make} {model}</CarItem> 
                <CarItem>Miles: {miles}</CarItem>
            </ItemList>
        </CarContainer>
    )
}

const CarContainer = styled.div`
    min-height: 150px;
    width: 100vw;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
`

const CarItem = styled.h4`
    margin: 0;
    padding: 0;
    align-text: center;
`
const ItemList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: calc(100% - 150px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const UtilityButtons = styled.div`
    height: 24px;
    width: 80%;
    display: flex;
    flex-direction: row-reverse;
`

export default withRouter(connect(null, {changeLoading, getCars})(DisplayCar))