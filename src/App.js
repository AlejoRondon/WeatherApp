import './App.css';
import './pages/WeatherToday/WeatherToday.css';
import React, { useEffect, useState } from 'react';
import WeatherTodayPage from './pages/WeatherToday/WeatherToday.jsx';
import WeatherInfoPage from './pages/WeatherInfo/WeatherInfo.jsx';
import SearchPage from './pages/Search/SearchPage.jsx';
import fetchCurrentLocation from './services/LocationService';
// eslint-disable-next-line
import getCurrentDate, { unixTimeConverter } from './services/DateService';
import fetchCurrentWeather, { fetchNextDaysWeather } from './services/WeatherService';

function App() {
  const [current_location, SetCurrentLocation] = useState();
  const [current_weather, SetCurrentWeather] = useState();
  const [next_days_weather, SetNextDaysWeather] = useState();
  // eslint-disable-next-line
  const [date, setDate] = useState();

  useEffect(() => {
    (async () => {
      try {
        let location = await fetchCurrentLocation();
        console.log('Current location: ', location);
        SetCurrentLocation(location);
      } catch (error) {
        console.error('Error getting location: ', error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (current_location) {
        try {
          let today_weather = await fetchCurrentWeather(current_location);
          console.log('Weather, today: ', today_weather);
          SetCurrentWeather(today_weather);
        } catch (error) {
          console.error('Error getting location: ', error);
        }
      }
    })();
  }, [current_location]);

  useEffect(() => {}, [current_weather]);

  useEffect(() => {
    (async () => {
      if (current_location) {
        try {
          let next_days_weather = await fetchNextDaysWeather(current_location);
          console.log('Weather, next 5 days: ', next_days_weather);
          SetNextDaysWeather(next_days_weather);
        } catch (error) {
          console.error('Error getting location: ', error);
        }
      }
    })();
  }, [current_location]);

  useEffect(() => {
    // console.log(next_days_weather);
    // if (next_days_weather) {
    //   next_days_weather.list.map((v, i) => {
    //     console.log(v, i);
    //   });
    // }
  }, [next_days_weather]);

  useEffect(() => {
    let current_date = getCurrentDate();
    console.log('Current Date: ', current_date);
    setDate(current_date);
  }, []);

  useEffect(() => {
    // console.log('hola');
  }, [date]);

  return (
    <main className='App'>
      <section id='primary-section'>
        <WeatherTodayPage weather={current_weather} date={date} location={current_location}></WeatherTodayPage>
        <SearchPage style={{ display: 'none' }}></SearchPage>
      </section>
      <section id='secondary-section'>
        <WeatherInfoPage></WeatherInfoPage>
      </section>
    </main>
  );
}

export default App;
