import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleMenu} from '../../../redux/Reducers/menuReducer'

function MenuSlide(props) {
    return (
        <>
        {props.menu?
        <MenuSlideContainer>
            <LoginLink to='/' onClick={props.toggleMenu}>
                <div>Home</div>
            </LoginLink>
            <LoginLink to='/user/login' onClick={props.toggleMenu} >
                <div>Login</div>
            </LoginLink>
            <LoginLink to='/user/register' onClick={props.toggleMenu} >
                <div>Register</div>
            </LoginLink>
            <LoginLink to='/garage' onClick={props.toggleMenu} >My Garage</LoginLink>
        </MenuSlideContainer>
        :
        null
        }
        </>
    )
}

const MenuSlideContainer = styled.main`
    width: 100%;
    height: 150px;
    background: pink;
    position: absolute;
    z-index: 20;
`

const LoginLink = styled(Link)`
    height: 100px;
    width: 100%;
    background: aquamarine
`

function mapStateToProps(state) {
    return state.menu
}

export default connect(mapStateToProps, {toggleMenu})(MenuSlide)
