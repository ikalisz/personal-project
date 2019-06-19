import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser} from '../../redux/Reducers/userReducer'
import {changeLoading} from '../../redux/Reducers/loadingReducer'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUpdateUsername = (username) => {
        this.setState({username})
    }
    handleUpdatePassword = (password) => {
        this.setState({password})
    }
    handleResetState = () => {
        this.setState({username: '', password: ''})
    }
    handleLogin = () => {
        this.props.changeLoading()
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
        .then(res => {
            this.props.changeLoading()
            this.props.setUser({...res.data})
            this.handleResetState()
            this.props.history.push('/')
        })
        .catch(err => {
            this.props.changeLoading()
            this.handleResetState()
            window.alert('Username or Password is incorrect')
        })
    }
    handleBossSubmit = () => {
        this.handleLogin()
    }
    handleGoRegister = () => {
        this.handleResetState()
        return this.props.history.push('/user/register')
    }
    render() {
        return (
           <LoginSection>
               <LoginForm onSubmit={(e) => e.preventDefault()}>
                    <LoginText>Username</LoginText>
                    <LoginInput type='text' placeholder='Username' value={this.state.username} onChange={(e) => this.handleUpdateUsername(e.target.value)} />
                    <LoginText>Password</LoginText>
                    <LoginInput type='password' placeholder='Password' value={this.state.password} onChange={(e) => this.handleUpdatePassword(e.target.value)} />
                    <LoginButton type="submit" onClick={this.handleBossSubmit}>Login</LoginButton>
                    <HaveAnAccountText>Don't have an account?</HaveAnAccountText>
                    <LoginButton type="reset" onClick={this.handleGoRegister}>Register</LoginButton>
               </LoginForm>
           </LoginSection>
        )
    }
}

//Styled Components
const LoginSection = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginForm = styled.form`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const LoginInput = styled.input`
    width: 60%;
    padding: 0;
    border: 1px black solid;
    border-radius: 5px;
    padding: 3px 5px;
    @media (min-width: 380px) {
        font-size: 20px;
    }
    @media (min-width: 500px) {
        font-size: 20px;
        width: 40%;
    }
`
const LoginButton = styled.button`
    height: 25px;
    width: 30%;
    outline: none;
    @media (min-width: 380px) {
        font-size: 20px;
        height: 30px;
        width: 15%;
    }
`

const LoginText = styled.h2`
    margin: 0;
`

const HaveAnAccountText = styled.p`
    margin: 0;
    color: #888
`

export default withRouter(connect(null, {setUser, changeLoading})(Login))