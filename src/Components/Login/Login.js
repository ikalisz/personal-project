import React, {Component} from 'react'
import styled from 'styled-components'

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
    handleLogn = () => {
        
    }
    render() {
        return (
           <LoginSection>
               <LoginForm onSubmit={(e) => e.preventDefault()}>
                    <h2>Username</h2>
                    <LoginInput type='text' placeholder='Username' value={this.state.username} onChange={(e) => this.handleUpdateUsername(e.target.value)} />
                    <h2>Password</h2>
                    <LoginInput type='password' placeholder='Password' value={this.state.password} onChange={(e) => this.handleUpdatePassword(e.target.value)} />
                    <LoginButton type="submit" onClick={this.handleResetState}>Login</LoginButton>
                    <LoginButton>Register</LoginButton>
               </LoginForm>
           </LoginSection>
        )
    }
}

//Styled Components
const LoginSection = styled.section`
    height: 80vh;
    width: 100vw;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginForm = styled.form`
    height: 100%;
    width: 90%;
    background: indianred;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const LoginInput = styled.input`
    width: 60%;
`
const LoginButton = styled.button`
    height: 25px;
    width: 30%;
    outline: none;
`

export default Login