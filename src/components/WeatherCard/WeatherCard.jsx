import React from 'react';
import './WeatherCard.css';
function WeatherCard({ weather, temp_units }) {
  let temp_min = Math.round(temp_units ? weather.temp_min : (weather.temp_min * 9.0) / 5.0 + 32.0);
  let temp_max = Math.round(temp_units ? weather.temp_max : (weather.temp_max * 9.0) / 5.0 + 32.0);
  return (
    <div className='WeatherCard'>
      <p>{weather.dt.short_date_str}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} />
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

export default WeatherCard;
