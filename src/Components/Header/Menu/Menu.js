import React from 'react'
import styled from 'styled-components'
import './Menu.css'

function Menu () {
    function openMenu() {
        const menu = document.querySelector('.menu')
        let topLine = document.querySelector('.topLine')
        let middleLine = document.querySelector('.middleLine')
        let bottomLine = document.querySelector('.bottomLine')
        switch(menu.classList[3]) {
            case 'hiddenGoActive': 
                topLine.classList.remove('closeTop')
                topLine.classList.add('openTop')
                menu.classList.replace('hiddenGoActive', 'activeGoHidden')
                middleLine.classList.replace('closeMiddle', 'openMiddle')
                bottomLine.classList.replace('closeBottom', 'openBottom')
                break
            case 'activeGoHidden':
                topLine.classList.replace('openTop', 'closeTop')
                menu.classList.replace('activeGoHidden', 'hiddenGoActive')
                middleLine.classList.replace('openMiddle', 'closeMiddle')
                bottomLine.classList.replace('openBottom', 'closeBottom')
                break
            default:
                topLine.classList.add('openTop')
                menu.classList.add('activeGoHidden')
                middleLine.classList.add('openMiddle')
                bottomLine.classList.add('openBottom')
                break
        }
    }
    return (
        <MenuContainer className="menu">
            <MenuButtonContainer>
                <MenuText>Menu</MenuText>
                <LineHolder>
                    <MenuLine className="topLine" />
                    <MenuLine className="middleLine" />
                    <MenuLine className="bottomLine" />
                </LineHolder>
            </MenuButtonContainer>
            <button onClick={openMenu}>Click</button>
        </MenuContainer>
    )
}

const MenuContainer = styled.main`
    height: 20%;
    width: 90%;
    background: #fff;
    @media (min-width: 500px) {
        display: none
    } 
`

const MenuButtonContainer = styled.section`
    height: 100%;
    width: 90px;
    background: pink;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const MenuText = styled.h2`
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