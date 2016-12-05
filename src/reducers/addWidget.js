import * as ActionTypes from '../actions/actionTypes';
import initialState from '../reducers/initialState';

export default function addWidget(state = initialState.addWidget, action) {
  switch (action.type) {
    case ActionTypes.ADD_WIDGET_SET_NAME: {
      const newState = Object.assign({}, state);
      newState.name = action.name;
      return newState;
    }

    default:
      return state;
  }
}
