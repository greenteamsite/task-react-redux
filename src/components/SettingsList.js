import React, { PropTypes } from 'react';
import Settings from './Settings';

function SettingsList(props) {
  const settings = props.settings.map((item, index) =>
    <Settings
      key={index}
      id={index}
      {...item}
      onNameChange={props.onNameChange}
      onCountChange={props.onCountChange}
      onColorChange={props.onColorChange}
      onSave={props.onSave}
    />,
    );

  return (
    <div>
      {settings}
    </div>
  );
}

SettingsList.propTypes = {
  settings: PropTypes.object.isRequired,
  /* eslint-disable react/no-unused-prop-types */
  onNameChange: PropTypes.func.isRequired,
  onCountChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default SettingsList;
