import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {getRepairs} from '../../redux/Reducers/repairReducer'
import {Redirect} from 'react-router-dom'
import DisplayRepair from './DisplayRepair'
import styled from 'styled-components'


class Repairs extends Component {
    componentDidMount() {
        this.props.getRepairs()
    }
    render() {
        const repairs = this.props.repairs.repairs.map((repair, i) => {
            return (
                <DisplayRepair key={i} status={repair.status} date_submitted={repair.date_submitted} date_finished={repair.date_finished} date_start={repair.date_start} fix_category={repair.fix_category} id={repair.car_id} />
            )
        }) 
        return (
            <RepairsDisplay>
                {this.props.user.username === 'admin' ? <Redirect to='/admin/repairs' />: null}
                {repairs}
            </RepairsDisplay>
        )
    }
}

const RepairsDisplay = styled.div`
    max-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    @media (min-width: 1000px) {
        width: 60%;
    }
`

function mapStateToProps(state) {
    return {
        repairs: state.repairs,
        user: state.user
    }
}

export default connect(mapStateToProps, {changeLoading, getRepairs})(Repairs)