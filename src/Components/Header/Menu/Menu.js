import React from 'react'
import styled from 'styled-components'

function Menu () {
    function openMenu() {
        let topLine = document.querySelector('.topLine')
        let middleLine = document.querySelector('.middleLine')
        let bottomLine = document.querySelector('.bottomLine')
    }
    return (
        <MenuContainer>
            <MenuButtonContainer>
                <MenuText>Menu</MenuText>
                <LineHolder>
                    <MenuLine className="topLine" />
                    <MenuLine className="middleLine" />
                    <MenuLine className="bottomLine" />
                </LineHolder>
            </MenuButtonContainer>
        </MenuContainer>
    )
}

const MenuContainer = styled.main`
    height: 20%;
    width: 90%;
    background: #fff;
`

const MenuButtonContainer = styled.section`
    height: 100%;
    width: 28%;
    background: pink;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const MenuText = styled.h3`
    width: 50%;
    margin: 0;
`
const LineHolder = styled.section`
    height: 60%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const MenuLine = styled.div`
    height: 2px;
    width: 80%;
    background: #000;
`

export default Menu