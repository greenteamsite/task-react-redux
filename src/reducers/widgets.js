//import { ADD_WIDGET } from '../constants/Widget'

const widget = (state, action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            return {
                id: action.id,
                name: action.name
            }
        default:
            return state
    }
}

const widgets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            return [
                ...state,
                widget(undefined, action)
            ]
        default:
            return state
    }
}

export default widgets