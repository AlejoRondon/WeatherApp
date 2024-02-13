import React from 'react';
import './WeatherCard.css';
function WeatherCard({ weather }) {
  return (
    <div className='WeatherCard'>
      <p>{weather.dt.short_date_str}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} />
      <div className='max_min_temp_wrapper'>
        <p className='max_temp'>{Math.round(weather.temp_max)}°C</p>
        <p className='min_temp'>{Math.round(weather.temp_min)}°C</p>
      </div>
    </div>
  );
}

export default WeatherCard;
