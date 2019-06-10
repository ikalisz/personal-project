import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
class Profile extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.changeLoading()
        axios.get('/auth/user')
        .then(res => {
            console.log(res.data)
            this.props.changeLoading()
        })
        .catch(err => {
            this.props.changeLoading()
            window.alert(err.response.data)
            this.props.history.push('/user/login')
        })
    }
    UserAndPass = () => {
        this.props.history.push('/user/change')
    }
    render() {
        console.log(this.props)
        return (
            <ProfileMain>
                <ProfileContainer>
                    <ItemDisplay>First name: {this.props.firstname}</ItemDisplay>
                    <ItemDisplay>Last name: {this.props.lastname}</ItemDisplay>
                    <ItemDisplay>Phone: {this.props.phone}</ItemDisplay>
                    <ItemDisplay>Email: {this.props.email}</ItemDisplay> 
                    <UserPassButton>Username and password</UserPassButton>
                    <EditButton>Edit info</EditButton>
                </ProfileContainer>
            </ProfileMain>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}



const ProfileMain = styled.main`
    height: 65vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`
const ProfileContainer = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const UserPassButton = styled.button`

`
const EditButton = styled.button`
`
const ItemDisplay = styled.h2`
    margin: 0;
    padding: 0;
`


export default withRouter(connect(mapStateToProps, {changeLoading})(Profile))