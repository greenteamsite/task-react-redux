//import { ADD_WIDGET, SET_WIDGET } from '../constants/index'
let i = 0

export const addWidget = (name) => ({
    type: 'ADD_WIDGET',
    id: ++i,
    name
})

export const setWidget = (id, name, count, color) => ({
    type: 'SET_WIDGET',
    id,
    name,
    count,
    color
})