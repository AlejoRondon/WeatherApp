import React, { useState, useEffect } from 'react';
import getCurrentLocation from '../../services/LocationService';
import './LocationIndicator.css';
function LocationIndicator() {
  const [current_location, SetCurrentLocation] = useState();

  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        console.log('Current location:', location);
        SetCurrentLocation(location);
      })
      .catch((error) => {
        console.error('Error getting location:', error);
      });
  }, []);

  return (
    <div className='LocationIndicator'>
      {current_location ? (
        <>
          <a
            style={{ display: 'block', textAlign: 'center' }}
            href={`https://maps.google.com?q=${current_location.lat},${current_location.lon}`}
            target='blank'
          >
            <i className='fas fa-map-marker-alt'></i>{' '}
            {`${current_location.name}, ${current_location.state}, ${current_location.country}`}
          </a>
          <p style={{ textAlign: 'center' }}>
            {current_location.lat},{current_location.lon}
          </p>
        </>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}

export default LocationIndicator;
