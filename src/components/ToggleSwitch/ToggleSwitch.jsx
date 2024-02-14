// https://www.geeksforgeeks.org/how-to-create-a-toggle-switch-in-react-as-a-reusable-component/
import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ label, onChangeToggleSwitch, temp_units }) => {
  return (
    <div className='container'>
      {/* {label} */}
      <div className='toggle-switch'>
        <input
          type='checkbox'
          className='checkbox'
          checked={temp_units}
          name={label}
          id={label}
          onChange={onChangeToggleSwitch}
        />
        <label className='label' htmlFor={label}>
          <span className='inner' />
          <span className='switch' />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
