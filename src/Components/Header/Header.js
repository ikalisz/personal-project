import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import ProfileDisplay from './Menu/ProfileDisplay'

function Header() {
    return (
        <HeaderEle>
            <LogoDisplay />
            <MenuContainer>
                <Menu />
                <ProfileDisplay/>
            </MenuContainer>
        </HeaderEle>
    )
}

const HeaderEle = styled.header`
    height: 150px;
    width: 100vw;
    background: #111;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const LogoDisplay = styled.img`
    height: 50%;
    width: 90%;
    background: #fff;
`
const MenuContainer = styled.main`
    height: 20%;
    width: 90%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    @media (min-width: 500px) {
        display: none
    } 
`

export default Header