import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SettingsList from '../components/SettingsList';
import * as actions from '../actions/widgetActions';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onCountChange = this.onCountChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onNameChange(index, event) {
    this.props.actions.onNameChange(index, event.target.value);
  }

  onCountChange(index, event) {
    this.props.actions.onCountChange(index, event.target.value);
  }

  onColorChange(index, event) {
    this.props.actions.onColorChange(index, event.target.value);
  }

  onSave(index) {
    this.props.actions.onSave(index);
  }

  render() {
    return (
      <SettingsList
        settings={this.props.settings}
        onNameChange={this.onNameChange}
        onCountChange={this.onCountChange}
        onColorChange={this.onColorChange}
        onSave={this.onSave}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    settings: state.widgets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

SettingsContainer.propTypes = {
  settings: PropTypes.object.isRequired,
  actions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
