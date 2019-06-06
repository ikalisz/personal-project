import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
function Profile() {
    
}

function mapStateToProps(state) {
    return state.user
}

export default withRouter(connect()(Profile))