import React from 'react';
import './WeatherInfo.css';
// import RoundButton from '../../components/RoundButton/RoundButton';
import WeatherCardsContainer from '../../components/WeatherCardsContainer/WeatherCardsContainer';
import HighlightsContainer from '../../components/HighlightsContainer/HighlightsContainer';
import HighlightCard from '../../components/HighlightCard/HighlightCard';
import Footer from '../../components/Footer/Footer';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
export default function WeatherInfo({ weather, next_days_weather, onChangeToggleSwitch, temp_units }) {
  return (
    <div className='WeatherInfo'>
      <div className='toogle-switch-wrapper'>
        <ToggleSwitch label='Units' onChangeToggleSwitch={onChangeToggleSwitch} temp_units={temp_units}></ToggleSwitch>
      </div>
      <WeatherCardsContainer temp_units={temp_units} next_days_weather={next_days_weather}></WeatherCardsContainer>
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
