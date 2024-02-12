export default async function fetchCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const url1 = `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API}`;
          (async () => {
            try {
              let response = await fetch(url1);
              const data = await response.json();
              return resolve(data[0]);
            } catch (err) {
              return reject(err);
            }
          })();
        },
        (error) => {
          reject(error);
        },
      );
    }
  });
}
