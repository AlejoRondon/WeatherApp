import React from 'react';
import './TemperatureIndicator.css';

function TemperatureIndicator({ temp, temp_max, temp_min }) {
  return (
    <div className='TemperatureIndicator'>
      <p className='temp_number'>
        {temp ? Math.round(temp) : '--'}
        <span className='temp_symbol'>°C</span>
      </p>
      <div className='max_min_temp_wrapper'>
        <p className='max_temp'>{temp_max ? Math.round(temp_max) : '--'}°C</p>
        <p className='min_temp'>{temp_min ? Math.round(temp_min) : '--'}°C</p>
      </div>
    </div>
  );
}

export default TemperatureIndicator;
