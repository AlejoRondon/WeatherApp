import './App.css';
import './pages/WeatherToday/WeatherToday.css';
import React, { useEffect, useState } from 'react';
import WeatherTodayPage from './pages/WeatherToday/WeatherToday.jsx';
import WeatherInfoPage from './pages/WeatherInfo/WeatherInfo.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import fetchCurrentLocation, { fetchLocationByCoord } from './services/LocationService';
import CloudsBackground from './components/CloudsBackground/CloudsBackground.jsx';
import getCurrentDate, { unixTimeConverter } from './services/DateService';
import fetchCurrentWeather, { fetchNextDaysWeather, fetchCurrentWeatherById } from './services/WeatherService';
import CityList from './components/CityList/CityList.jsx';

// eslint-disable-next-line
function App() {
  const [temp_units, SetTempUnits] = useState(true); //true: °C false: °F
  const [shown_location, setShownLocation] = useState();
  const [current_location, setCurrentLocation] = useState();
  const [current_weather, SetCurrentWeather] = useState();
  const [next_days_weather, SetNextDaysWeather] = useState();
  const [date, setDate] = useState();
  const [searchStr, setSearchStr] = useState('');

  const handleChangeToggleSwitch = () => SetTempUnits((prev) => !prev);

  const handleCurrentLocationClick = () => {
    setShownLocation(current_location);
  };

  const handleChangeSearchInput = (e) => {
    setSearchStr(e.target.value);
  };

  const handleKeyPressDownSearchInput = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      // if either 'enter' or 'scape' is pressed the CityList is hidden
      setSearchStr('');
    }
  };

  const handleClickCityItem = (e) => {
    let city_code = e.target.dataset.cityCode;
    setSearchStr(''); // Clear the input -> hide the CityList

    (async () => {
      try {
        // Fetch weather information by using the cityCode...
        let weather_info = await fetchCurrentWeatherById(city_code);
        if (weather_info.cod === '404') {
          console.error("Error: it wasn't possible to get information of the city with code:", city_code);
          return;
        }
        // ... to get coords and fetch the city location object
        let city_location = await fetchLocationByCoord(weather_info.coord);
        console.log(city_location[0]);
        setShownLocation(city_location[0]);
      } catch (error) {
        console.error('Error fetching information', error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        let location = await fetchCurrentLocation();
        console.log('Current location: ', location);
        setShownLocation(location);
        setCurrentLocation(location);
      } catch (error) {
        console.error('Error getting location: ', error);
        let default_location = {
          name: 'Medellín',
          local_names: {
            ru: 'Медельин',
            mk: 'Медељин',
            oc: 'Medellín',
            ar: 'ميديلين',
            es: 'Medellín',
            ur: 'میڈیئن',
            en: 'Medellín',
            fa: 'مدئین',
            pt: 'Medellín',
            uk: 'Медельїн',
          },
          lat: 6.2443382,
          lon: -75.573553,
          country: 'CO',
          state: 'Antioquia',
        };
        setShownLocation(default_location);
        setCurrentLocation(default_location);
      }
    })();
  }, []);

  useEffect(() => {
    let current_date = getCurrentDate();
    console.log('Current Date: ', current_date);
    setDate(current_date);
  }, []);

  useEffect(() => {
    (async () => {
      if (shown_location) {
        try {
          let today_weather = await fetchCurrentWeather(shown_location);
          console.log('Weather, today: ', today_weather);
          SetCurrentWeather(today_weather);
        } catch (error) {
          console.error("Error getting Today's", error);
        }
      }
    })();
  }, [shown_location]);

  useEffect(() => {
    (async () => {
      if (shown_location) {
        try {
          let next_days_weather = await fetchNextDaysWeather(shown_location);
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
  }, [shown_location]);

  return (
    <main className='App'>
      <section id='primary-section'>
        <CloudsBackground></CloudsBackground>
        <SearchBar
          searchStr={searchStr}
          onChangeSearch={handleChangeSearchInput}
          onKeyPressSearch={handleKeyPressDownSearchInput}
          onClickCurrentLocation={handleCurrentLocationClick}
        ></SearchBar>
        <CityList
          searchStr={searchStr}
          style={{ display: `${searchStr ? 'block' : 'none'}` }}
          onClickCityItem={handleClickCityItem}
        ></CityList>
        <WeatherTodayPage
          date={date}
          location={shown_location}
          temp_units={temp_units}
          weather={current_weather}
          style={{ display: `${!searchStr ? 'block' : 'none'}` }}
        ></WeatherTodayPage>
      </section>
      <section id='secondary-section'>
        <WeatherInfoPage
          next_days_weather={next_days_weather}
          temp_units={temp_units}
          weather={current_weather}
          onChangeToggleSwitch={handleChangeToggleSwitch}
        ></WeatherInfoPage>
      </section>
    </main>
  );
}

export default App;
