import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import {changeLoading} from '../../../redux/Reducers/loadingReducer'
import {resetUser} from '../../../redux/Reducers/userReducer'
import {resetMenu} from '../../../redux/Reducers/menuReducer'

function MenuContainer(props) {
    function handleLogin() {
        props.resetMenu()
        props.history.push('/user/login')
    }
    function handleProfile() {
        props.resetMenu()
        props.history.push('/user/profile')
    }
    function handleLogout() {
        props.changeLoading()
        props.resetMenu()
        axios.get('/auth/logout')
        .then(res => {
            props.changeLoading()
            props.resetUser()
        })
        .catch(err => {
            console.log(err)
            props.changeLoading()
        })
    }
    return (
        <Container>
            <ProfileButton onClick={props.username ? handleProfile : handleLogin}>{props.username ? 'Profile' : 'Login'}</ProfileButton>
            {props.username ? <Logout onClick={handleLogout}>Logout</Logout> : null}
        </Container>
    )
}

function mapStateToProps(state) {
    return state.user
}

const ProfileButton = styled.div`
    height: 100%;
    min-width: 4em;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logout = styled.button`
    margin: 0;
`
const Container = styled.div`
height: 100%;
min-width: 20%;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export default withRouter(connect(mapStateToProps, {changeLoading, resetUser, resetMenu})(MenuContainer))