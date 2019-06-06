import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderEle>
            <LogoDisplay />
        </HeaderEle>
    )
}

const HeaderEle = styled.header`
    height: 100px;
    width: 100vw;
    background: #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoDisplay = styled.img`
    height: 80%;
    width: 20%;
    background: #fff;
    margin-left: 10px;
`

const displayUser = styled.div`

`

export default Header