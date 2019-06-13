import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Footer() {

    return (
        <FooterContainer><Link to='/contact'>Contact Us</Link></FooterContainer>
    )
}

const FooterContainer = styled.footer`
    height: 10vh;
    width: 100vw;
    background: black;
    position: fixed;
    bottom: 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1000px) {
        background: #green;
    }
`

export default Footer