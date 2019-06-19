import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {

    return (
        <FooterContainer>
            <Link to='/contact' className="contactLink">Contact Us</Link>
            <FooterText>Shop phone: (123)-456-7890</FooterText>
            <FooterText>Email: quickfix@email.com</FooterText>
            <FooterText>Location: 123 Fake St Lehi, UT</FooterText>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    height: 10vh;
    width: 100%;
    background: black;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1000px) {
        background: #green;
        position: initial;
        height: 7vh;
        justify-content: space-evenly;
    }
`

const FooterText = styled.p`
    margin: 0;
    display: none;
    @media (min-width: 1000px) {
        display: initial;
        color: #fff;
    }
`

export default Footer