import React from 'react';
import './WeatherCardsContainer.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

function WeatherCardsContainer({ next_days_weather, temp_units }) {
  const next_days_weather_components = next_days_weather ? (
    next_days_weather.map((e, i) => <WeatherCard key={i} weather={e} temp_units={temp_units}></WeatherCard>)
  ) : (
    <>
      <p>Loading...</p>
    </>
  );
  return <div className='WeatherCardsContainer'>{next_days_weather_components}</div>;
}

export default WeatherCardsContainer;
