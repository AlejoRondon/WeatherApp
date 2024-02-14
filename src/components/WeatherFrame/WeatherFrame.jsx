import React from 'react';
import './WeatherFrame.css';
// import CityList from '../CityList/CityList';
function WeatherFrame({ weather }) {
  return (
    <div className='WeatherFrame'>
      {/* <CityList></CityList> */}
      {weather ? (
        <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} />
      ) : (
        <p>Loading weather image...</p>
      )}
    </div>
  );
}

export default WeatherFrame;
