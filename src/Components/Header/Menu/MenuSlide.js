import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function MenuSlide() {
    return (
        <MenuSlideContainer>
            <LoginLink to='/'>
                <div>Home</div>
            </LoginLink>
            <LoginLink to='/login'>
                <div>Login</div>
            </LoginLink>
        </MenuSlideContainer>
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

export default MenuSlide
