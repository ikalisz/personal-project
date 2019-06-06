const initalState = {
    menu: null,
}
//true is shown, false is hidden.

const TOGGLE_MENU = 'TOGGLE_MENU'
const RESET_MENU = 'RESET_MENU'

function reducer(state = initalState, action) {
    switch(action.type){
        case TOGGLE_MENU:
            let newMenu = !state.menu
            if (state.menu === null) return 
        default:
            return state
    }
}

export function changeMenu() {
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