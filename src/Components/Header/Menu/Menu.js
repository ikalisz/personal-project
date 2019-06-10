import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {toggleMenu} from '../../../redux/Reducers/menuReducer'
import './Menu.css'

function Menu (props) {
    console.log(props)
    function openMenu() {
        const menu = document.querySelector('.menu')
        let topLine = document.querySelector('.topLine')
        let middleLine = document.querySelector('.middleLine')
        let bottomLine = document.querySelector('.bottomLine')
        switch(props.menu) {
            case false: 
                topLine.classList.remove('closeTop')
                topLine.classList.add('openTop')
                menu.classList.replace('hiddenGoActive', 'activeGoHidden')
                middleLine.classList.replace('closeMiddle', 'openMiddle')
                bottomLine.classList.replace('closeBottom', 'openBottom')
                props.toggleMenu()
                break
            case true :
                topLine.classList.replace('openTop', 'closeTop')
                menu.classList.replace('activeGoHidden', 'hiddenGoActive')
                middleLine.classList.replace('openMiddle', 'closeMiddle')
                bottomLine.classList.replace('openBottom', 'closeBottom')
                props.toggleMenu()
                break
            default:
                topLine.classList.add('openTop')
                menu.classList.add('activeGoHidden')
                middleLine.classList.add('openMiddle')
                bottomLine.classList.add('openBottom')
                props.toggleMenu()
                break
        }
    }
    return (
        <>
            <MenuButtonContainer onClick={openMenu} className="menu">
                <MenuText>Menu</MenuText>
                <LineHolder>
                    <MenuLine className="topLine" />
                    <MenuLine className="middleLine" />
                    <MenuLine className="bottomLine" />
                </LineHolder>
            </MenuButtonContainer>
        </>
    )
}

const MenuButtonContainer = styled.section`
    height: 100%;
    width: 100px;
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

function mapStateToProps(state) {
    return state.menu
}

export default connect(mapStateToProps, {toggleMenu})(Menu)