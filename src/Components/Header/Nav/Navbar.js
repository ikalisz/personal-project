import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import axios from 'axios'
import {changeLoading} from '../../../redux/Reducers/loadingReducer'
import {resetUser} from '../../../redux/Reducers/userReducer'
import {withRouter} from 'react-router-dom'

function Navbar(props) {
    function logout() {
        props.changeLoading()
        axios.get('/auth/logout')
        .then(res => {
            props.changeLoading()
            props.resetUser()
            props.history.push('/')
        })
        .catch(err => {
            console.log(err)
            props.changeLoading()
        })
    }
    return (
        <NavBar>
            <Link style={{ textDecoration: 'none' }} to='/' ><LinkText>Home</LinkText></Link>
            {props.username?
                <Link style={{ textDecoration: 'none' }} to='/garage'><LinkText>Garage</LinkText></Link>
                :
                <Link style={{ textDecoration: 'none' }} to='/user/login'><LinkText>Login</LinkText></Link>
            }
            {props.username?
                <Link style={{textDecoration: 'none'}} to='/user/repairs'><LinkText>Repairs</LinkText></Link>
                :
                null
            }
            {props.username?
                <Link style={{ textDecoration: 'none' }} to='/user/profile'><LinkText>Profile</LinkText></Link>
            :
                <Link style={{ textDecoration: 'none' }} to='/user/register'><LinkText>Register</LinkText></Link>
            }
            {props.username?
                <LinkText style={{ textDecoration: 'none' }} onClick={logout}>Logout</LinkText>
                :
                null
            }
        </NavBar>
    )
}

function mapStateToProps(state) {
    return state.user
}

export default withRouter(connect(mapStateToProps, {changeLoading, resetUser})(Navbar))

const LinkText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    font-size: 18px;
    color: #fff;
    border: none;
    :hover {
        cursor: pointer;
        color: pink;
    }
`

const NavBar = styled.nav`
    height: 10%;
    width: 90%;
    display: none;
    @media (min-width: 500px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    @media (min-width: 1000px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 60%;
        height: 20%;
    }
`