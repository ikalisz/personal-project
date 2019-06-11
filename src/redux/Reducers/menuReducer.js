const initalState = {
    menu: null,
}
//true is shown, false is hidden.

const TOGGLE_MENU = 'TOGGLE_MENU'
const RESET_MENU = 'RESET_MENU'

function reducer(state = initalState, action) {
    let topLine = document.querySelector('.topLine')
    let middleLine = document.querySelector('.middleLine')
    let bottomLine = document.querySelector('.bottomLine')
    switch(action.type){
        case TOGGLE_MENU:
            let newMenu = !state.menu
            if (state.menu === null) {
                topLine.classList.add('openTop')
                middleLine.classList.add('openMiddle')
                bottomLine.classList.add('openBottom')
                return {
                    menu: true,
                } 
            }
            if (state.menu) {
                topLine.classList.replace('openTop', 'closeTop')
                middleLine.classList.replace('openMiddle', 'closeMiddle')
                bottomLine.classList.replace('openBottom', 'closeBottom')
                return {
                    menu: newMenu
                }
            } else {
                topLine.classList.remove('closeTop')
                topLine.classList.add('openTop')
                middleLine.classList.replace('closeMiddle', 'openMiddle')
                bottomLine.classList.replace('closeBottom', 'openBottom')
                return {
                    menu: newMenu
                }
            }
        case RESET_MENU:
            topLine.classList.replace('openTop', 'closeTop')
            middleLine.classList.replace('openMiddle', 'closeMiddle')
            bottomLine.classList.replace('openBottom', 'closeBottom')
            return {
                menu: null,
            }
        default:
            return state
    }
}

export function toggleMenu() {
    return {
        type: TOGGLE_MENU
    }
}

export function resetMenu() {
    return {
        type: RESET_MENU
    }
}

export default reducer