import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleMenu} from '../../../redux/Reducers/menuReducer'

function MenuSlide(props) {
    console.log(props)
    return (
        <>
        {props.menu.menu?
        <MenuSlideContainer>
            <LoginLink to='/' onClick={props.toggleMenu}>
                <div>Home</div>
            </LoginLink>
            {props.user.username? 
            null
            :
            <>
                <LoginLink to='/user/login' onClick={props.toggleMenu} >
                    <div>Login</div>
                </LoginLink>
                <LoginLink to='/user/register' onClick={props.toggleMenu} >
                    <div>Register</div>
                </LoginLink>
            </>
            }
            <LoginLink to='/garage' onClick={props.toggleMenu} >My Garage</LoginLink>
            <LoginLink to='/user/repairs' onClick={props.toggleMenu}>Repairs</LoginLink>
        </MenuSlideContainer>
        :
        null
        }
        </>
    )
}

const MenuSlideContainer = styled.main`
    width: 100%;
    min-height: 20px;
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
    return {
        menu: state.menu,
        user: state.user
    }
}

export default connect(mapStateToProps, {toggleMenu})(MenuSlide)
