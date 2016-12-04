import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/app.css'

const initialState = {
	widgets: [
		{
			id: 0,
			name: 'u3T',
            count: 0,
            color: 'rgb(155, 55, 10)'
		}
	]
};

const store = configureStore(initialState)

render(
	<Provider store={store}>
		<App className='app'/>
	</Provider>,
	document.getElementById('root')
)
