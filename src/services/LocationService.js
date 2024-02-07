export default function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Make a request to a Geocoding API (e.g. Google Maps Geocoding API)
          const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.REACT_APP_MAPS_API}`;

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              // Parse the city name from the API response
              const city = data.results[0].address_components[1].long_name;
              resolve({
                city,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            })
            .catch((error) => reject(error));
        },
        (error) => {
          reject(error);
        },
      );
    }
  });
}

// // Then, pass the location coordinates to a Geocoding API to get the city name
// export function showCity(position) {
//   // Make a request to a Geocoding API (e.g. Google Maps Geocoding API)
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&key=AIzaSyCHC2Pxk4MkioJe2DHFXXSMq0AG6s-CJHI`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // Parse the city name from the API response
//       const city = data.results[0].address_components[1].long_name;

//       console.log(`Your city is ${city}.`);
//     })
//     .catch((error) => console.log(error));
// }
