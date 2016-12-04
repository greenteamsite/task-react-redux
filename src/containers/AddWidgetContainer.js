import React from 'react'
import { connect } from 'react-redux'
import { addWidget } from '../actions'

let AddWidget = ({dispatch}) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()){
                    return
                }
                dispatch(addWidget(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type='submit'>
                    Add Widget
                </button>
            </form>
        </div>
    )
}

AddWidget = connect()(AddWidget)

export default AddWidget