import React from 'react'
import styled from 'styled-components'
import {withRouter, Link} from 'react-router-dom'


function DisplayCar(props) {
    let {year, miles, make, model} = props
    return (
        <CarContainer>
            <img src="https://via.placeholder.com/150" alt="" />
            <ItemList>
                <CarItem>Miles: {miles}</CarItem>
                <CarItem>Year: {year}</CarItem>
                <CarItem>Make: {make}</CarItem>
                <CarItem>Model: {model}</CarItem>
            </ItemList>
        </CarContainer>
    )
}

const CarContainer = styled.div`
    min-height: 100px;
    width: 100vw;
    display: flex;
    align-items: center;
`

const CarItem = styled.h4`
    margin: 0;
    padding: 0;
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

export default withRouter(DisplayCar)