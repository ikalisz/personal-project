import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {changeLoading} from '../../redux/Reducers/userReducer'
class Profile extends Component {
    constructor() {
        super()
        this.state = {
            id: null,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            edit: false,
        }
    }
    componentDidMount() {
        this.props.changeLoading()
        axios.get('/auth/user')
        .then(res => {
            console.log(res.data)
            this.setState({
                id: res.data.id,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                phone: res.data.phone,
                email: res.data.email,
                loggedIn: true
            })
            this.props.changeLoading()

        })
        .catch(err => {
            console.log(err)
            this.props.changeLoading()
        })  
    }

    render() {
        console.log(this.props)
        return (
            <ProfileMain>
                <ProfileContainer>
                    <ItemDisplay>First name: {this.state.firstname}</ItemDisplay>
                    <ItemDisplay>Last name: {this.state.lastname}</ItemDisplay>
                    <ItemDisplay>Phone: {this.state.phone}</ItemDisplay>
                    <ItemDisplay>Email: {this.state.email}</ItemDisplay> 
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
    height: 85vh;
    width: 100vw;
    background: blue;
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

`


export default withRouter(connect(mapStateToProps, {changeLoading})(Profile))