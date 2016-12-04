import React from 'react'
//3, 'fd', 5, '#dd2c9a'
const Settings = ({id, name, count, color, setWidget}) => {
    let inputs = []
    let values = []
    let onBtnClick = (...a) => (
        setWidget(...a)
    )
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                for(let i in inputs){
                    values.push(inputs[i].value || inputs[i].defaultValue)
                }

                onBtnClick(...values)
            }
            }>
                <input type='hidden' value={id} />
                <input type='text' name='name-input' defaultValue={name} ref={node => {inputs.push(node)}}/>
                <input type='number' name='count-input' defaultValue={count} ref={node => {inputs.push(node)}}/>
                <input type='color' name='color-input' defaultValue={color} ref={node => {inputs.push(node)}}/>
                <button type='submit' id='btn save-btn'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Settings