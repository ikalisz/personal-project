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
                <RepairText>Status: {props.status}</RepairText>
                {props.status === 'Pending'? <><RepairText>Date Submitted:</RepairText><RepairText> {props.date_submitted}</RepairText></>: null}
                {props.status === 'Accepted' ? <><RepairText>Date Accepted:</RepairText><RepairText> {props.date_accept}</RepairText></>: null}
                {props.status === 'Ongoing'? <><RepairText>Date Started:</RepairText><RepairText> {props.date_start}</RepairText></>: null}
                {props.status === 'Finished'? <><RepairText>Date Finished: </RepairText><RepairText>{props.date_finished}</RepairText></>: null}
                <RepairText>Repair Type:</RepairText>
                <RepairText>{props.fix_category}</RepairText>
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
`


const TextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const RepairText = styled.p`
    margin: 0;
    width: 100%;
    height: 20px;
`

const UpdateButton = styled.button``
export default withRouter(connect(null, {changeLoading})(RepairDisplay))