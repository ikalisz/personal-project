import React from 'react'
import {connect} from 'react-redux'
import {changeLoading} from '../../../redux/Reducers/loadingReducer'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


function RepairDisplay(props) {
    function updateRepair() {
        props.changeLoading()
        axios.get('/repair/date').then(res => {
            let curDate = res.data[0].current_date
            curDate = curDate.split('').splice(0, 10).join('')
            axios.put(`/repairs/dateaccept/${props.id}`, {date_accept: curDate}).then(res => {
                props.fnAcceptedPending()
                props.changeLoading()
            })
        })
    }
    function updateAccepted() {
        props.changeLoading()
        axios.get('/repair/date').then(res => {
            let curDate = res.data[0].current_date
            curDate = curDate.split('').splice(0, 10).join('')
            axios.put(`/repairs/datestart/${props.id}`, {date_start: curDate}).then(res => {
                props.fnStartedAccepted()
                props.changeLoading()
            })
        })
    }
    function updateOngoing() {
        props.changeLoading()
        axios.get('/repair/date').then(res => {
            let curDate = res.data[0].current_date
            curDate = curDate.split('').splice(0, 10).join('')
            axios.put(`/repairs/datefin/${props.id}`, {date_finished: curDate}).then(res => {
                props.fnFinishedOngoing()
                props.changeLoading()
            })
        })
    }
    return (
        <RepairContainer>
            <TextContainer>
                <RepairRow>
                    <RepairText>Status: </RepairText><RepairText>{props.status}</RepairText>
                </RepairRow>
                <RepairRow>
                    <RepairText>Car: </RepairText>
                    <RepairText>{props.year} {props.make} {props.model}</RepairText>
                </RepairRow>
                {props.status === 'Pending'? <RepairRow><RepairText>Date Submitted:</RepairText><RepairText> {props.date_submitted}</RepairText></RepairRow>: null}
                {props.status === 'Accepted' ? <RepairRow><RepairText>Date Accepted:</RepairText><RepairText> {props.date_accept}</RepairText></RepairRow>: null}
                {props.status === 'Ongoing'? <RepairRow><RepairText>Date Started:</RepairText><RepairText> {props.date_start}</RepairText></RepairRow>: null}
                {props.status === 'Finished'? <RepairRow><RepairText>Date Finished: </RepairText><RepairText>{props.date_finished}</RepairText></RepairRow>: null}
                <RepairRow>
                    <RepairText>Repair Type:</RepairText>
                    <RepairText>{props.fix_category}</RepairText>
                </RepairRow>
                {props.status === 'Pending'? <UpdateButton onClick={updateRepair}>Accept</UpdateButton> : null }
                {props.status === 'Accepted' ? <UpdateButton onClick={updateAccepted}>Start</UpdateButton> : null}
                {props.status === 'Ongoing' ? <UpdateButton onClick={updateOngoing} >Finish</UpdateButton> : null}
            </TextContainer>
        </RepairContainer>
    )
}
const RepairContainer = styled.div`
    min-height: 100px;
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1000px) {
        min-height: 200px;
    }
`

const RepairRow = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`


const TextContainer = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const RepairText = styled.p`
    margin: 0;
    width: 40%;
    height: 20px;
`

const UpdateButton = styled.button``
export default withRouter(connect(null, {changeLoading})(RepairDisplay))