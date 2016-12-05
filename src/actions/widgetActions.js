// import { ADD_WIDGET, SET_WIDGET } from '../constants/index'
export function addWidget(name) {
  return {
    type: 'ADD_WIDGET',
    name,
  };
}

export const setWidget = (id, name, count, color) => ({
  type: 'SET_WIDGET',
  id,
  name,
  count,
  color,
});

export function onNameChange(index, name) {
  return {
    type: 'SETTINGS_SET_NAME',
    index,
    name,
  };
}

export function onCountChange(index, count) {
  return {
    type: 'SETTINGS_SET_COUNT',
    index,
    count,
  };
}

export function onColorChange(index, color) {
  return {
    type: 'SETTINGS_SET_COLOR',
    index,
    color,
  };
}

export function onSave(index) {
  return {
    type: 'SETTINGS_SAVE',
    index,
  };
}
