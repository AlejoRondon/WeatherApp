import React from 'react';
import './WeatherInfo.css';
import RoundButton from '../../components/RoundButton/RoundButton';
import WeatherCardsContainer from '../../components/WeatherCardsContainer/WeatherCardsContainer';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import HighlightsContainer from '../../components/HighlightsContainer/HighlightsContainer';
import HighlightCard from '../../components/HighlightCard/HighlightCard';
import Footer from '../../components/Footer/Footer';
export default function WeatherInfo() {
  return (
    <div className='WeatherInfo'>
      <div className='temperature_buttons'>
        <RoundButton>°F</RoundButton>
        <RoundButton>°C</RoundButton>
      </div>
      <WeatherCardsContainer>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
      </WeatherCardsContainer>
      <HighlightsContainer>
        <HighlightCard title='Wind status' value='7' units='mph'></HighlightCard>
        <HighlightCard title='Humidity' value='84' units='%'></HighlightCard>
        <HighlightCard title='Visibility' value='6,4' units='miles'></HighlightCard>
        <HighlightCard title='Air Pressure' value='998' units='mb'></HighlightCard>
      </HighlightsContainer>
      <Footer></Footer>
    </div>
  );
}
