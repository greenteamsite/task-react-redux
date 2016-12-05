import { combineReducers } from 'redux';
import widgets from './widgets';
import addWidget from './addWidget';

export default combineReducers({
  widgets,
  addWidget,
});
