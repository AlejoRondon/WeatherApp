import React from 'react';
import './TemperatureIndicator.css';

function TemperatureIndicator({ temp, temp_max, temp_min, temp_units }) {
  temp = Math.round(temp_units ? temp : (temp * 9.0) / 5.0 + 32.0);
  temp_min = Math.round(temp_units ? temp_min : (temp_min * 9.0) / 5.0 + 32.0);
  temp_max = Math.round(temp_units ? temp_max : (temp_max * 9.0) / 5.0 + 32.0);
  return (
    <div className='TemperatureIndicator'>
      <p className='temp_number'>
        {temp ? temp : '--'}
        <span className='temp_symbol'>{temp_units ? '°C' : '°F'}</span>
      </p>
      <div className='max_min_temp_wrapper'>
        <p className='max_temp'>
          {temp_max ? temp_max : '--'}
          {temp_units ? '°C' : '°F'}
        </p>
        <p className='min_temp'>
          {temp_min ? temp_min : '--'}
          {temp_units ? '°C' : '°F'}
        </p>
      </div>
    </div>
  );
}

export default TemperatureIndicator;
