import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {toggleMenu} from '../../../redux/Reducers/menuReducer'
import './Menu.css'

function Menu (props) {
    function openMenu() {
        switch(props.menu) {
            case false: 
                props.toggleMenu()
                break
            case true :
                props.toggleMenu()
                break
            default:
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
    height: 18px;
    width: 30px;
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