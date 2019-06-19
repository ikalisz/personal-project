import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import ProfileDisplay from './Menu/ProfileDisplay'
import NavBar from './Nav/Navbar'

function Header() {
    return (
        <HeaderEle>
            <LogoDisplay src={require('../../assests/QuickLogo.png')} />
            <MenuContainer>
                <Menu />
                <ProfileDisplay/>
            </MenuContainer>
            <NavBar />
        </HeaderEle>
    )
}

const HeaderEle = styled.header`
    height: 25vh;
    width: 100%;
    background: #111;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 15vh;
    }
`

const LogoDisplay = styled.img`
    height: 74px;
    width: 273px;
    background: #fff;
    @media (min-width: 500px) {

    }
`
const MenuContainer = styled.main`
    height: 20%;
    width: 75%;
    display: flex;
    justify-content: space-between;
    @media (min-width: 500px) {
        display: none
    } 
`

export default Header