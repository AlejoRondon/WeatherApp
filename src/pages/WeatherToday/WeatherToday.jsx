import React from 'react';
import './WeatherToday.css';
import WeatherFrame from '../../components/WeatherFrame/WeatherFrame';
import TemperatureIndicator from '../../components/TemperatureIndicator/TemperatureIndicator';
import WeatherDescription from '../../components/WeatherDescription/WeatherDescription';
import CurrentDate from '../../components/CurrentDate/CurrentDate';
import LocationIndicator from '../../components/LocationIndicator/LocationIndicator';
export default function WeatherToday({ weather, date, location, temp_units, style }) {
  return (
    <div className='WeatherToday' style={style}>
      <WeatherFrame weather={weather ? weather.weather[0] : null}></WeatherFrame>
      <TemperatureIndicator
        temp={weather ? weather.main.temp : null}
        temp_max={weather ? weather.main.temp_max : null}
        temp_min={weather ? weather.main.temp_min : null}
        temp_units={temp_units}
      ></TemperatureIndicator>
      <WeatherDescription description={weather ? weather.weather[0].main : null}></WeatherDescription>
      <CurrentDate date={date}></CurrentDate>
      <LocationIndicator location={location}></LocationIndicator>
    </div>
  );
}
