import React, { PropTypes } from 'react'

const Widget = ({name}) => (
    <div className='unselected'>
    <div
        className='widget'
        onClick={function(e){
            e.target.style.backgroundColor = 'green'
        }}
    >
        <h3>{name}</h3>
    </div>
    </div>
)

Widget.propTypes = {
    name: PropTypes.string.isRequired
}

export default Widget