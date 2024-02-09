import React from 'react';
import './WeatherFrame.css';
import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';
function WeatherFrame() {
  return (
    <div className='WeatherFrame'>
      <WeatherIcon style={{ width: '90%' }} type='CloudAndRainnyIcon'></WeatherIcon>
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
