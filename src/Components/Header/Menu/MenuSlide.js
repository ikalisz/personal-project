import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function MenuSlide(props) {
    return (
        <>
        {props.menu?
        <MenuSlideContainer>
            <LoginLink to='/'>
                <div>Home</div>
            </LoginLink>
            <LoginLink to='/user/login'>
                <div>Login</div>
            </LoginLink>
            <LoginLink to='/user/register'>
                <div>Register</div>
            </LoginLink>
            <LoginLink to='/garage'>My Garage</LoginLink>
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
`

const LoginLink = styled(Link)`
    height: 100px;
    width: 100%;
    background: aquamarine
`

function mapStateToProps(state) {
    return state.menu
}

export default connect(mapStateToProps)(MenuSlide)
