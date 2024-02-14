export default async function fetchCurrentWeather(location) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_API}`;
    let response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting current weather: ', error);
  }
}

export async function fetchCurrentWeatherById(id) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_WEATHER_API}`;
    let response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting current weather: ', error);
  }
}

export async function fetchNextDaysWeather(location) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_API}`;
    let response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting 5 day weather forecast: ', error);
  }
}
