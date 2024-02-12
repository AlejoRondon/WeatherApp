import React from 'react';
import './WeatherDescription.css';

function WeatherDescription({ description }) {
  return (
    <div className='WeatherDescription'>
      <p>{description ? description : '------'}</p>
    </div>
  );
}

export default WeatherDescription;
