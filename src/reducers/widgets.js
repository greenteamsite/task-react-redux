import * as ActionTypes from '../actions/actionTypes';
import initialState from '../reducers/initialState';
import { updateArrayItem, addArrayItem } from '../helpers/immutableHelper';

export default function widget(state = initialState.widgets, action) {
  switch (action.type) {
    case ActionTypes.ADD_WIDGET: {
      return addArrayItem(state, { name: action.name });
    }

    case ActionTypes.SETTINGS_SET_NAME: {
      return updateArrayItem(state, action.index, { name: action.name });
    }

    case ActionTypes.SETTINGS_SET_COUNT: {
      return updateArrayItem(state, action.index, { count: action.count });
    }

    case ActionTypes.SETTINGS_SET_COLOR: {
      return updateArrayItem(state, action.index, { color: action.color });
    }

    default:
      return state;
  }
}
