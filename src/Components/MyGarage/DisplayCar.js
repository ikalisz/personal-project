import React from 'react'
import styled from 'styled-components'


function DisplayCar(props) {
    let {year, miles, make, model} = props
    return (
        <div>
            <CarItem>Miles: {miles}</CarItem>
            <CarItem>Year: {year}</CarItem>
            <CarItem>Make: {make}</CarItem>
            <CarItem>Model: {model}</CarItem>
        </div>
    )
}

const CarItem = styled.h1`

`

export default DisplayCar