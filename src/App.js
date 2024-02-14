import './App.css';
import './pages/WeatherToday/WeatherToday.css';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import WeatherTodayPage from './pages/WeatherToday/WeatherToday.jsx';
import WeatherInfoPage from './pages/WeatherInfo/WeatherInfo.jsx';
// eslint-disable-next-line
import SearchPage from './pages/Search/SearchPage.jsx';
import fetchCurrentLocation from './services/LocationService';
// eslint-disable-next-line
import SearchBar from './components/SearchBar/SearchBar';
// eslint-disable-next-line
import CloudsBackground from './components/CloudsBackground/CloudsBackground.jsx';
// eslint-disable-next-line
import getCurrentDate, { unixTimeConverter } from './services/DateService';
import fetchCurrentWeather, { fetchNextDaysWeather } from './services/WeatherService';
// eslint-disable-next-line
import { Country, State, City } from 'country-state-city';
// console.log(Country.getAllCountries());
// console.log(State.getAllStates());
console.log(City.getAllCities());
// import cities from 'all-the-cities';

function App() {
  const [temp_units, SetTempUnits] = useState(true); //true: °C false: °F
  const [current_location, SetCurrentLocation] = useState();
  const [current_weather, SetCurrentWeather] = useState();
  const [next_days_weather, SetNextDaysWeather] = useState();
  const [date, setDate] = useState();
  // eslint-disable-next-line
  const [cities, setCities] = useState([]);

  const handleChangeToggleSwitch = () => SetTempUnits((prev) => !prev);

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

  useEffect(() => {
    // const fetchCities = async () => {
    //   try {
    //     const response = await fetch('http://api.geonames.org/searchJSON?q=&country=&maxRows=1000&username=demo');
    //     const data = await response.json();
    //     const cityNames = data.geonames.map((city) => city.name);
    //     setCities(cityNames);
    //   } catch (error) {
    //     console.error('Error fetching city data:', error);
    //   }
    // };
    // fetchCities();
  }, []);

  return (
    <main className='App'>
      <section id='primary-section'>
        <CloudsBackground></CloudsBackground>
        <SearchBar></SearchBar>
        <WeatherTodayPage
          style={{ display: 'none' }}
          weather={current_weather}
          date={date}
          location={current_location}
          temp_units={temp_units}
        ></WeatherTodayPage>
        <SearchPage></SearchPage>
      </section>
      <section id='secondary-section'>
        <WeatherInfoPage
          onChangeToggleSwitch={handleChangeToggleSwitch}
          temp_units={temp_units}
          weather={current_weather}
          next_days_weather={next_days_weather ? next_days_weather : null}
        ></WeatherInfoPage>
      </section>
    </main>
  );
}

export default App;
