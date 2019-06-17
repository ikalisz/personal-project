import React from 'react'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

function DisplayRepair(props) {
    return (
        <RepairContainer>
            <CarImage src="https://via.placeholder.com/150" alt="" onClick={() => props.history.push(`/car/${props.id}`)} />
            <TextContainer>
                <RepairText>Status: {props.status}</RepairText>
                {props.status === 'Pending'? <><RepairText>Date Submitted:</RepairText><RepairText> {props.date_submitted}</RepairText></>: null}
                {props.status === 'Accepted' ? <><RepairText>Date Accepted:</RepairText><RepairText> {props.date_start}</RepairText></>: null}
                {props.status === 'Ongoing'? <><RepairText>Date Started:</RepairText><RepairText> {props.date_start}</RepairText></>: null}
                {props.status === 'Finished'? <><RepairText>Date Finished: </RepairText><RepairText>{props.date_finished}</RepairText></>: null}
                <RepairText>Repair Type:</RepairText>
                <RepairText>{props.fix_category}</RepairText>
            </TextContainer>
        </RepairContainer>
    )
}

const RepairContainer = styled.div`
    min-height: 150px;
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CarImage = styled.img`
    height: 150px;
    width: 150px;
`

const TextContainer = styled.div`
    height: 100%;
    width: calc(100% - 150px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const RepairText = styled.p`
    margin: 0;
`

export default withRouter(DisplayRepair)