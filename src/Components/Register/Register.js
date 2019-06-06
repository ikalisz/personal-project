import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPass: '',
            phone: null,
            email: '',
            firstname: '',
            lastname: '',
        }
    }
    render() {
        return (
            <RegisterSection>
                <RegisterForm>
                    <RegisterInputContainer>
                        <h2>First name:</h2>
                        <RegisterInput type='text' placeholder='First name' required />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <h2>Last name:</h2>
                        <RegisterInput type='text' placeholder='Lastname' />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <h2>Email:</h2>
                        <RegisterInput type='email' placeholder='Email' required />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <h2>Phone:</h2>
                        <RegisterInput type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Phone format: 123-456-7890' required />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <h2>Username:</h2>
                        <RegisterInput type='text' placeholder='Username' required />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <h2>Password:</h2>
                        <RegisterInput type='password' placeholder='Password' required />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <h2>Confirm password:</h2>
                        <RegisterInput type='password' placeholder='Confirm password' required />
                    </RegisterInputContainer>
                    <RegisterButton>Register</RegisterButton>
                    <h2>Already have an account?</h2>
                    <RegisterButton>Login</RegisterButton>
                </RegisterForm>
            </RegisterSection>
        )
    }
}

const RegisterSection = styled.section`
    height: 80vh;
    width: 100vw;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RegisterForm = styled.form`
    height: 100%;
    width: 90%;
    background: indianred;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const RegisterInputContainer = styled.section`
height: 30px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const RegisterInput = styled.input`
    width: 60%;
`
const RegisterButton = styled.button`
    height: 25px;
    width: 30%;
    outline: none;
`

export default Register