import React from 'react'
import AddWidgetContainer from '../containers/AddWidgetContainer'
import WidgetContainer from '../containers/WidgetContainer'
import SettingsContainer from '../containers/SettingsContainer'

const App = () => (
    <div>
    <div id='dashboard'>
        <div className='box-el polaroid'>
            <AddWidgetContainer />
        </div>
        <div className='box-el polaroid'>
            <WidgetContainer />
        </div>
    </div>
    <div id='settings'>
        <div className='settings polaroid'>
            <SettingsContainer />
        </div>
    </div>
    </div>
)

export default App
