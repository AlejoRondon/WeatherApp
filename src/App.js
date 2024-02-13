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
          console.error("Error getting Today's", error);
        }
      }
    })();
  }, [current_location]);

  useEffect(() => {
    (async () => {
      if (current_location) {
        try {
          let next_days_weather = await fetchNextDaysWeather(current_location);
          next_days_weather = next_days_weather.list.filter((e) => {
            return e.dt_txt.includes('18:00:00');
          });
          next_days_weather = next_days_weather.map((e) => {
            return {
              dt: unixTimeConverter(e.dt * 1000),
              weather: e.weather[0].main,
              description: e.weather[0].description,
              temp_max: e.main.temp_max,
              temp_min: e.main.temp_min,
              icon: e.weather[0].icon,
            };
          });

          console.log('Weather, next 5 days: ', next_days_weather);
          SetNextDaysWeather(next_days_weather);
        } catch (error) {
          console.error('Error getting Next 5 days weather', error);
        }
      }
    })();
  }, [current_location]);

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
        <WeatherInfoPage
          weather={current_weather}
          next_days_weather={next_days_weather ? next_days_weather : null}
        ></WeatherInfoPage>
      </section>
    </main>
  );
}

export default App;
