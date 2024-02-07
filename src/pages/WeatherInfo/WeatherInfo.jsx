import React from 'react'
import './WeatherInfo.css'
import RoundButton from '../../components/RoundButton/RoundButton'
import WeatherCardsContainer from '../../components/WeatherCardsContainer/WeatherCardsContainer'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import HighlightsContainer from '../../components/HighlightsContainer/HighlightsContainer'
import HighlightCard from '../../components/HighlightCard/HighlightCard'
import Footer from '../../components/Footer/Footer'
export default function WeatherInfo() {
  return (
    <div className='WeatherInfo'>
      <RoundButton>°C</RoundButton>
      <RoundButton>°F</RoundButton>
      <WeatherCardsContainer>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
      </WeatherCardsContainer>
      <HighlightsContainer>
        <HighlightCard></HighlightCard>
        <HighlightCard></HighlightCard>
        <HighlightCard></HighlightCard>
        <HighlightCard></HighlightCard>
      </HighlightsContainer>
      <Footer></Footer>
    </div>
  )
}
