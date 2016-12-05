import React, { PropTypes } from 'react';
// 3, 'fd', 5, '#dd2c9a'
function Settings(props) {
  const onNameChangeBound = props.onNameChange.bind(this, props.id);
  const onCountChangeBound = props.onCountChange.bind(this, props.id);
  const onColorChangeBound = props.onColorChange.bind(this, props.id);
  const onSaveBound = props.onSave.bind(this, props.id);
  return (
    <div>
      <input type='text' value={props.name} onChange={onNameChangeBound} />
      <input type='number' value={props.count} onChange={onCountChangeBound} />
      <input type='color' value={props.color} onChange={onColorChangeBound} />
      <button onClick={onSaveBound}>
                Save
            </button>
    </div>
  );
}

Settings.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onCountChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Settings;
