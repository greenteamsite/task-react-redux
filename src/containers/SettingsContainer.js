import { connect } from 'react-redux'
import SettingsList from '../components/SettingsList'
import { setWidget } from '../actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => ({
    settings: state.widgets
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({setWidget}, dispatch)
    //setWidget: setWidget
)

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsList)

export default SettingsContainer