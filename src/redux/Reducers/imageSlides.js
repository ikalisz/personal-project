const initialState = {
    loaded: false
}

const CHANGE_LOADED = 'CHANGE_LOADED'

function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_LOADED:
            return {
                loaded: !state.loaded
            }
        default:
            return state
    }
}

export function changeLoaded() {
    return {
        type: CHANGE_LOADED
    }
}

export default reducer