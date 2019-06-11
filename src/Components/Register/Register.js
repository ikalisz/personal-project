import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {setUser} from '../../redux/Reducers/userReducer'
import {changeLoading} from '../../redux/Reducers/loadingReducer'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

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
    handleChangeUser = (username) => {
        this.setState({username})
    }
    handleChangePass = (password) => {
        console.log(password)
        this.setState({password})
    }
    handleChangeConfirm = (confirmPass) => {
        console.log(confirmPass)
        this.setState({confirmPass})
    }
    handleChangePhone = (phone) => {
        console.log(typeof phone)
        console.log(phone)
        this.setState({phone})
    }
    handleChangeEmail = (email) => {
        this.setState({email})
    }
    handleChangeFirst = (firstname) => {
        this.setState({firstname})
    }
    handleChangeLast = (lastname) => {
        this.setState({lastname})
    }
    handleResetState = () => {
        this.setState({
            username: '',
            password: '',
            confirmPass: '',
            phone: '',
            email: '',
            firstname: '',
            lastname: '',
        })
    }
    handleSubmitRegister = () => {
        const {username, password, firstname, lastname, confirmPass, email, phone} = this.state
        if (password !== confirmPass) {
            return window.alert('Passwords do not match')
        }
        this.props.changeLoading()
        axios.post('/auth/register', {username, password, firstname, lastname, email, phone})
        .then(res => {
            this.props.changeLoading()
            this.props.setUser({...res.data})
            this.props.history.push('/')
        })
    }
    handleGoLogin = () => {
        this.handleResetState()
        return this.props.history.push('/user/login')
    }
    render() {
        return (
            <RegisterSection>
                <RegisterForm onSubmit={(e) => e.preventDefault()}>
                    <RegisterInputContainer>
                        <p>First name:</p>
                        <RegisterInput type='text' placeholder='First name' required onChange={(e) => this.handleChangeFirst(e.target.value)} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <p>Last name:</p>
                        <RegisterInput type='text' placeholder='Lastname' onChange={(e) => this.handleChangeLast(e.target.value)} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <p>Email:</p>
                        <RegisterInput type='email' placeholder='Email' required onChange={(e) => this.handleChangeEmail(e.target.value)} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <p>Phone:</p>
                        <RegisterInput type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Phone format: 123-456-7890' required onChange={(e) => this.handleChangePhone(e.target.value)} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <p>Username:</p>
                        <RegisterInput type='text' placeholder='Username' required onChange={(e) => this.handleChangeUser(e.target.value)} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <p>Password:</p>
                        <RegisterInput type='password' placeholder='Password' required onChange={(e) => this.handleChangePass(e.target.value)} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <p>Confirm password:</p>
                        <RegisterInput type='password' placeholder='Confirm password' required onChange={(e) => this.handleChangeConfirm(e.target.value)} />
                    </RegisterInputContainer>
                    <ButtonContainer>
                        <RegisterButton type="submit" onClick={this.handleSubmitRegister}>Register</RegisterButton>
                        <p>Already have an account?</p>
                        <RegisterButton onClick={this.handleGoLogin}>Login</RegisterButton>
                    </ButtonContainer>
                </RegisterForm>
            </RegisterSection>
        )
    }
}

const RegisterSection = styled.section`
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RegisterForm = styled.form`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 5px;
`
const RegisterInputContainer = styled.section`
    height: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ButtonContainer = styled.section`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column
`

const RegisterInput = styled.input`
    width: 45%;
`
const RegisterButton = styled.button`
    height: 25px;
    width: 30%;
    outline: none;
`

export default withRouter(connect(null, {changeLoading, setUser})(Register))