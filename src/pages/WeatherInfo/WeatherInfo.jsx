import React from 'react';
import './WeatherInfo.css';
import RoundButton from '../../components/RoundButton/RoundButton';
import WeatherCardsContainer from '../../components/WeatherCardsContainer/WeatherCardsContainer';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import HighlightsContainer from '../../components/HighlightsContainer/HighlightsContainer';
import HighlightCard from '../../components/HighlightCard/HighlightCard';
import Footer from '../../components/Footer/Footer';
export default function WeatherInfo({ weather, next_days_weather }) {
  const next_days_weather_elements = next_days_weather ? (
    next_days_weather.map((e, i) => <WeatherCard key={i} weather={e}></WeatherCard>)
  ) : (
    <>
      <p>Loading...</p>
    </>
  );

  return (
    <div className='WeatherInfo'>
      <div className='temperature_buttons'>
        <RoundButton>°F</RoundButton>
        <RoundButton>°C</RoundButton>
      </div>
      <WeatherCardsContainer>{next_days_weather_elements}</WeatherCardsContainer>
      <HighlightsContainer>
        <HighlightCard title='Wind status' value={weather ? weather.wind.speed : null} units='mps'></HighlightCard>
        <HighlightCard title='Humidity' value={weather ? weather.main.humidity : null} units='%'></HighlightCard>
        <HighlightCard title='Visibility' value={weather ? weather.visibility : null} units='m'></HighlightCard>
        <HighlightCard title='Air Pressure' value={weather ? weather.main.pressure : null} units='mBar'></HighlightCard>
      </HighlightsContainer>
      <Footer></Footer>
    </div>
  );
}
