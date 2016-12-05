/* eslint-disable import/prefer-default-export */
export function onNameChange(name) {
  return {
    type: 'ADD_WIDGET_SET_NAME',
    name,
  };
}
