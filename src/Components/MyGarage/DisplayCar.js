import React from 'react'
import styled from 'styled-components'
import {withRouter, Link} from 'react-router-dom'


function DisplayCar(props) {
    let {year, miles, make, model} = props
    return (
        <div>
            <img></img>
            <ItemList>
                <CarItem>Miles: {miles}</CarItem>
                <CarItem>Year: {year}</CarItem>
                <CarItem>Make: {make}</CarItem>
                <CarItem>Model: {model}</CarItem>
            </ItemList>
        </div>
    )
}

const CarContainer = styled.div`
    min-height: 100px;
    width: 100vw;

`

const CarItem = styled.h1`

`
const ItemList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export default withRouter(DisplayCar)