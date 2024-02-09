import React from 'react';
import './TemperatureIndicator.css';

function TemperatureIndicator() {
  return (
    <div className='TemperatureIndicator'>
      <p className='temp_number'>
        15<span className='temp_symbol'>°C</span>
      </p>
    </div>
  );
}

export default TemperatureIndicator;
