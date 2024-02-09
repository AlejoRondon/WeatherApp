import React from 'react';
import './WeatherCard.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
function WeatherCard() {
  return (
    <div className='WeatherCard'>
      <p>Tomorrow</p>
      <WeatherIcon></WeatherIcon>
      <div className='max_min_temp_wrapper'>
        <p className='max_temp'>26°C</p>
        <p className='min_temp'>19°C</p>
      </div>
    </div>
  );
}

export default WeatherCard;
