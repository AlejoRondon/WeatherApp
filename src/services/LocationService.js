export default async function fetchCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchLocationByCoord({ lat: position.coords.latitude, lon: position.coords.longitude })
            .then((data) => {
              return resolve(data[0]);
            })
            .catch((err) => {
              return reject(err);
            });
        },
        (error) => {
          reject(error);
        },
      );
    }
  });
}

export async function fetchLocationByCoord(position) {
  const url1 = `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.lat}&lon=${position.lon}&appid=${process.env.REACT_APP_WEATHER_API}`;
  let response = await fetch(url1);
  return await response.json();
}
