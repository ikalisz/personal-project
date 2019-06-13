import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <NavBar>
            <Link to='/' >Home</Link>
            <Link to='/garage'>Garage</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/user/login'></Link>
        </NavBar>
    )
}

const NavBar = styled.nav`
    height: 10%;
    width: 90%;
    display: none;
    background: #fff;
    @media (min-width: 500px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`