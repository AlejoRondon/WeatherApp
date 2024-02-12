import React from 'react';
import './WeatherCard.css';
function WeatherCard() {
  return (
    <div className='WeatherCard'>
      <p>Tomorrow</p>
      <img src='https://openweathermap.org/img/wn/13d@2x.png' />
      <div className='max_min_temp_wrapper'>
        <p className='max_temp'>26°C</p>
        <p className='min_temp'>19°C</p>
      </div>
    </div>
  );
}

export default WeatherCard;
