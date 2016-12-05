/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WidgetList from '../components/WidgetList';
// import { PropTypes } from 'react'

class WidgetContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <WidgetList widgets={this.props.widgets} />
    );
  }
}

function mapStateToProps(state) {
  return {
    widgets: state.widgets,
  };
}

WidgetContainer.propTypes = {
  widgets: PropTypes.array.isRequired,
};
/* const mapDispatchToProps = ({dispatch}) => ({
    //setWidget: bindActionCreator()
})*/

export default connect(mapStateToProps)(WidgetContainer);
