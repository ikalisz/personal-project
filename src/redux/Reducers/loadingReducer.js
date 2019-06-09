const initialState = {
    loading: false
}

const CHANGE_LOADING = 'CHANGE_LOADING'

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOADING:
            let newLoading = !state.loading
            return {
                loading: newLoading
            }
        default:
            return state
    }
}

export function changeLoading() {
    return {
        type: CHANGE_LOADING
    }
}

export default reducer