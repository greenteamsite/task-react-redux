import React from 'react'
import Settings from './Settings'

const SettingsList = ({ settings, setWidget }) => {

    return(
        <div>
            {settings.map(s =>
                <Settings
                    key={s.id}
                    {...s}
                    setWidget={setWidget}
                />
            )}
        </div>
    )
}

export default SettingsList