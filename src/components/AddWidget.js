import React, { PropTypes } from 'react';

function AddWidget(props) {
  return (
    <div>
      <input value={props.name} onChange={props.onNameChange} />
      <button onClick={props.onSubmit}>
          Add Widget
      </button>
    </div>
  );
}

AddWidget.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddWidget;
