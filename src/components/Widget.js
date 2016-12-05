import React, { PropTypes } from 'react';

const Widget = ({ name, color, count }) => (
  <div className='unselected'>
    <div
      style={{ backgroundColor: color }}
      className='widget'
    >
      <h3>{name} - ({count})</h3>
    </div>
  </div>
);

Widget.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  count: PropTypes.string,
};

export default Widget;
