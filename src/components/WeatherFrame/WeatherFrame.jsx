import React from 'react';
import './WeatherFrame.css';

function WeatherFrame({ weather }) {
  return (
    <div className='WeatherFrame'>
      {weather ? (
        <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} />
      ) : (
        <p>Loading weather image...</p>
      )}

      <div id='background-wrap'>
        <div className='x1'>
          <div className='cloud'></div>
        </div>
        <div className='x2'>
          <div className='cloud'></div>
        </div>
        <div className='x3'>
          <div className='cloud'></div>
        </div>
        <div className='x4'>
          <div className='cloud'></div>
        </div>
        <div className='x5'>
          <div className='cloud'></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherFrame;
