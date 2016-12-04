const setting = (state, action) => {
    switch (action.type) {
        case 'SET_WIDGET':
            return {
                id: action.id,
                name: action.name,
                count: action.count,
                color: action.color
            }
        default:
            return state
    }
}

const settings = (state = [], action) => {
    switch (action.type) {
        case 'SET_WIDGET':
            return [
                ...state,
                setting(state, action)
            ]
        default:
            return state
    }
}

export default settings