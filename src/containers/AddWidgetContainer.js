import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as addWidgetActions from '../actions/addWidgetActions';
import * as widgetActions from '../actions/widgetActions';
import AddWidget from '../components/AddWidget';

class AddWidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    this.props.addWidgetActions.onNameChange(event.target.value);
  }

  onSubmit() {
    this.props.widgetActions.addWidget(this.props.addWidget.name);
  }

  render() {
    return (
      <AddWidget
        {...this.props.addWidget}
        onNameChange={this.onNameChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    addWidget: state.addWidget,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addWidgetActions: bindActionCreators(addWidgetActions, dispatch),
    widgetActions: bindActionCreators(widgetActions, dispatch),
  };
}

const addWidgetItem = {
  name: PropTypes.string,
};

AddWidgetContainer.propTypes = {
  addWidget: PropTypes.shape(addWidgetItem),
  addWidgetActions: PropTypes.func.isRequired,
  widgetActions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetContainer);
