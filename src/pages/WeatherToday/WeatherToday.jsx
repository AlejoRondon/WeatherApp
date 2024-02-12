import React from 'react';
import './WeatherToday.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherFrame from '../../components/WeatherFrame/WeatherFrame';
import TemperatureIndicator from '../../components/TemperatureIndicator/TemperatureIndicator';
import WeatherDescription from '../../components/WeatherDescription/WeatherDescription';
import CurrentDate from '../../components/CurrentDate/CurrentDate';
import LocationIndicator from '../../components/LocationIndicator/LocationIndicator';
export default function WeatherToday({ weather, date, location }) {
  return (
    <div className='WeatherToday'>
      <SearchBar></SearchBar>
      <WeatherFrame weather={weather ? weather.weather[0] : null}></WeatherFrame>
      <TemperatureIndicator
        temp={weather ? weather.main.temp : null}
        temp_max={weather ? weather.main.temp_max : null}
        temp_min={weather ? weather.main.temp_min : null}
      ></TemperatureIndicator>
      <WeatherDescription description={weather ? weather.weather[0].main : null}></WeatherDescription>
      <CurrentDate date={date}></CurrentDate>
      <LocationIndicator location={location}></LocationIndicator>
    </div>
  );
}
