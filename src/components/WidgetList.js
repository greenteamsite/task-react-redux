import React, { PropTypes } from 'react';
import Widget from './Widget';

const WidgetList = ({ widgets }) => (
  <div>
    {widgets.map((widget, index) =>
      <Widget
        key={index}
        {...widget}
      />,
        )}
  </div>
);

WidgetList.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
        // active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
    //onWidgetClick: PropTypes.func.isRequired
};

export default WidgetList;
