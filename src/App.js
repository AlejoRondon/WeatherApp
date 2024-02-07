import './App.css'
import './pages/WeatherToday/WeatherToday.css'
import React from 'react'
import './components/WeatherIcon/WeatherIcon.jsx'
import WeatherTodayPage from './pages/WeatherToday/WeatherToday.jsx'
import WeatherInfoPage from './pages/WeatherInfo/WeatherInfo.jsx'
import SearchPage from './pages/Search/SearchPage.jsx'
function App() {
  return (
    <main className='App'>
      <section id='primary-section'>
        <WeatherTodayPage></WeatherTodayPage>
        <SearchPage style={{ display: 'none' }}></SearchPage>
      </section>
      <section id='secondary-section'>
        <WeatherInfoPage></WeatherInfoPage>
      </section>
    </main>
  )
}

export default App
