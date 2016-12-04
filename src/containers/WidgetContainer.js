//import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'
//import { PropTypes } from 'react'

const mapStateToProps = (state) => ({
    widgets: state.widgets.map(w => {
        return {
            id: w.id,
            name: w.name
        }
    })
})

/*const mapDispatchToProps = ({dispatch}) => ({
    //setWidget: bindActionCreator()
})*/

const WidgetContainer = connect(mapStateToProps)(WidgetList)

export default WidgetContainer