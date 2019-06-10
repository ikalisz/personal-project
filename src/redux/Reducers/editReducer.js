const initialState = {
    edit: false
}

const TOGGLE_EDIT = 'TOGGLE_EDIT'

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_EDIT:
            let newEdit = !state.edit
            return {
                edit: newEdit
            }
        default:
            return state
    }
}

export function toggleEdit() {
    return {
        type: TOGGLE_EDIT
    }
}

export default reducer