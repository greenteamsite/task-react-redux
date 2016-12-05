import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import './styles/app.css';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App className='app' />
  </Provider>,
  document.getElementById('root'),
);
