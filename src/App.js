import './App.css';
import './pages/WeatherToday/WeatherToday.css';
import React, { useEffect, useState } from 'react';
import WeatherTodayPage from './pages/WeatherToday/WeatherToday.jsx';
import WeatherInfoPage from './pages/WeatherInfo/WeatherInfo.jsx';
// eslint-disable-next-line
import fetchCurrentLocation, { fetchLocationByCoord } from './services/LocationService';
import SearchBar from './components/SearchBar/SearchBar';
import CloudsBackground from './components/CloudsBackground/CloudsBackground.jsx';
import getCurrentDate, { unixTimeConverter } from './services/DateService';
import fetchCurrentWeather, { fetchNextDaysWeather, fetchCurrentWeatherById } from './services/WeatherService';
import CityList from './components/CityList/CityList.jsx';
// eslint-disable-next-line

function App() {
  const [temp_units, SetTempUnits] = useState(true); //true: °C false: °F
  const [shown_location, setShownLocation] = useState();
  // eslint-disable-next-line
  const [current_location, setCurrentLocation] = useState();
  // eslint-disable-next-line
  const [searched_city_location, setSearchedCityLocation] = useState();
  const [current_weather, SetCurrentWeather] = useState();
  const [next_days_weather, SetNextDaysWeather] = useState();
  const [date, setDate] = useState();
  const [search_str, setSearchStr] = useState('');
  const [searched_city, setSearchedCity] = useState();

  const handleChangeToggleSwitch = () => SetTempUnits((prev) => !prev);
  const handleChangeSearchInput = (e) => {
    setSearchStr(e.target.value);
  };
  const handleKeyPressDownSearchInput = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      console.log('Enter key pressed');
      setSearchStr('');
    }
  };

  const handleClickCityItem = (e) => {
    setSearchedCity({ name: e.target.innerText, code: e.target.getAttribute('code') });
    setSearchStr('');
  };

  // eslint-disable-next-line
  const handleCurrentLocationClick = () => {
    console.log('going to current location');
    setShownLocation(current_location);
  };

  useEffect(() => {
    // console.log(search_str);
  }, [search_str]);

  useEffect(() => {
    console.log(searched_city);
    (async () => {
      if (searched_city) {
        try {
          let today_weather = await fetchCurrentWeatherById(searched_city.code);
          console.log('Weather, id: ', today_weather);
          fetchLocationByCoord(today_weather.coord).then((data) => {
            console.log(data[0]);
            setSearchedCityLocation(data[0]);
            setShownLocation(data[0]);
          });
        } catch (error) {
          console.error("Error getting Today's", error);
        }
      }
    })();
  }, [searched_city]);

  useEffect(() => {
    (async () => {
      try {
        let location = await fetchCurrentLocation();
        console.log('Current location: ', location);
        setShownLocation(location);
        setCurrentLocation(location);
      } catch (error) {
        console.error('Error getting location: ', error);
      }
    })();
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
        <SearchBar
          search_str={search_str}
          onChangeSearch={handleChangeSearchInput}
          onKeyPressSearch={handleKeyPressDownSearchInput}
          onClickCurrentLocation={handleCurrentLocationClick}
        ></SearchBar>
        <CityList search_str={search_str} onClickCityItem={handleClickCityItem}></CityList>
        <WeatherTodayPage
          // style={{ display: 'none' }}
          weather={current_weather}
          date={date}
          location={shown_location}
          temp_units={temp_units}
        ></WeatherTodayPage>
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
