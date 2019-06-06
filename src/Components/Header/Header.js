import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'

function Header() {
    return (
        <HeaderEle>
            <LogoDisplay />
            <Menu />
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

const displayUser = styled.div`

`

export default Header