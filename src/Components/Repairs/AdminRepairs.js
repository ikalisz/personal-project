import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

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
        if (this.props.user.username === 'admin') {
            axios.get('/repairs')
        }
    }


    render() {
        return (
            <AdminRepairContainer>
                {this.props.user.username === 'admin'?
                <>
                    <RepairContainer>
                        <RepairText></RepairText>
                    </RepairContainer>
                    <RepairContainer>
                        <RepairText></RepairText>
                    </RepairContainer>
                    <RepairContainer>
                        <RepairText></RepairText>
                    </RepairContainer>
                    <RepairContainer>
                        <RepairText></RepairText>
                    </RepairContainer>
                    <RepairContainer>
                        <RepairText></RepairText>
                    </RepairContainer>
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
    background: blue;
    display: flex;
`

const RepairContainer = styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const RepairText = styled.h3`
    height: 10%;
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
`

const RepairsContainer = styled.div`
    height: 40%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function mapStateToProps(state) {
    return {
        user: state.user,

    }
}

export default connect(mapStateToProps)(AdminRepairs)

