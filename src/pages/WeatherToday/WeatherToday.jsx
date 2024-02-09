import React from 'react';
import './WeatherToday.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherFrame from '../../components/WeatherFrame/WeatherFrame';
import TemperatureIndicator from '../../components/TemperatureIndicator/TemperatureIndicator';
import WeatherDescription from '../../components/WeatherDescription/WeatherDescription';
import CurrentDate from '../../components/CurrentDate/CurrentDate';
import LocationIndicator from '../../components/LocationIndicator/LocationIndicator';
export default function WeatherToday() {
  return (
    <div className='WeatherToday'>
      <SearchBar></SearchBar>
      <WeatherFrame></WeatherFrame>
      <TemperatureIndicator></TemperatureIndicator>
      <WeatherDescription></WeatherDescription>
      <CurrentDate></CurrentDate>
      <LocationIndicator></LocationIndicator>
    </div>
  );
}
