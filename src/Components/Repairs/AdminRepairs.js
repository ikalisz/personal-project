import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import RepairDisplay from './RepairDisplay/RepairDisplay'
import {changeLoading} from '../../redux/Reducers/loadingReducer'

class AdminRepairs extends Component {
    constructor() {
        super()
        this.state = {
            repairPending: [],
            repairAccepted: [],
            repairOngoing: [],
            repairFinished: []
        }
    }

    componentDidMount() {
        this.props.changeLoading()
        if (this.props.user.username === 'admin') {
            axios.get('/user/repairs/pending').then(res => this.setState({repairPending: res.data}))
            axios.get('/user/repairs/accepted').then(res => this.setState({repairAccepted: res.data}))
            axios.get('/user/repairs/ongoing').then(res => this.setState({repairOngoing: res.data}))
            axios.get('/user/repairs/finished').then(res => this.setState({repairFinished: res.data}))
        }
        this.props.changeLoading()
    }
    fnAcceptedPending = () => {
        this.props.changeLoading()
        axios.get('/user/repairs/pending').then(res => this.setState({repairPending: res.data}))
        axios.get('/user/repairs/accepted').then(res => this.setState({repairAccepted: res.data}))
        this.props.changeLoading()
    }
    fnStartedAccepted = () => {
        this.props.changeLoading()
        axios.get('/user/repairs/accepted').then(res => this.setState({repairAccepted: res.data}))
        axios.get('/user/repairs/ongoing').then(res => this.setState({repairOngoing: res.data}))
        this.props.changeLoading()
    }
    fnFinishedOngoing = () => {
        this.props.changeLoading()
        axios.get('/user/repairs/ongoing').then(res => this.setState({repairOngoing: res.data}))
        axios.get('/user/repairs/finished').then(res => this.setState({repairFinished: res.data}))
        this.props.changeLoading()
    }


    render() {
        const pendingDisplay = this.state.repairPending.map((repair, i) => {
            return <RepairDisplay key={i} status={repair.status} id={repair.repair_id} fix_category={repair.fix_category} date_submitted={repair.date_submitted} date_finished={repair.date_finished} date_start={repair.date_start} fnAcceptedPending={this.fnAcceptedPending} year={repair.year} model={repair.model} make={repair.make} />
        })
        const acceptedDisplay = this.state.repairAccepted.map((repair, i) => {
            return <RepairDisplay key={i} id={repair.repair_id} status={repair.status} fix_category={repair.fix_category} date_accept={repair.date_accept} fnStartedAccepted={this.fnStartedAccepted} year={repair.year} model={repair.model} make={repair.make} />
        })
        const ongoingDisplay = this.state.repairOngoing.map((repair, i) => {
            return <RepairDisplay key={i} id={repair.repair_id} status={repair.status} fix_category={repair.fix_category} date_start={repair.date_start} fnFinishedOngoing={this.fnFinishedOngoing} year={repair.year} model={repair.model} make={repair.make} />
        })
        const finishedDisplay = this.state.repairFinished.map((repair, i) => {
            return <RepairDisplay key={i} id={repair.repair_id} status={repair.status} fix_category={repair.fix_category} date_finished={repair.date_finished} year={repair.year} model={repair.model} make={repair.make} />
        })
        return (
            <AdminRepairContainer>
                {this.props.user.username === 'admin'?
                <>
                    <Row1>
                        <RepairContainer>
                            <RepairText>Pending</RepairText>
                            <RepairsContainerDisplay>{pendingDisplay}</RepairsContainerDisplay>
                        </RepairContainer>
                        <RepairContainer>
                            <RepairText>Accepted</RepairText>
                            <RepairsContainerDisplay>{acceptedDisplay}</RepairsContainerDisplay>
                        </RepairContainer>
                    </Row1>
                    <Row2>
                        <RepairContainer>
                            <RepairText>Ongoing</RepairText>
                            <RepairsContainerDisplay>{ongoingDisplay}</RepairsContainerDisplay>
                        </RepairContainer>
                        <RepairContainer>
                            <RepairText>Finished</RepairText>
                            <RepairsContainerDisplay>{finishedDisplay}</RepairsContainerDisplay>
                        </RepairContainer>
                    </Row2>
                </>
                :
                <Redirect to='/' />
                }
            </AdminRepairContainer>
        )
    }
}


const AdminRepairContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Row1 = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
`
const Row2 = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
`

const RepairContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;
`
const RepairText = styled.h3`
    height: 20%;
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
`

const RepairsContainerDisplay = styled.div`
    height: 80%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid black;
`

function mapStateToProps(state) {
    return {
        user: state.user,

    }
}

export default connect(mapStateToProps, {changeLoading})(AdminRepairs)

