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
            href={`https://maps.google.com?q=${current_location.latitude},${current_location.longitude}`}
            target='blank'
          >
            <i className='fas fa-map-marker-alt'></i> {current_location.city}
          </a>
          <p style={{ textAlign: 'center' }}>
            {current_location.latitude},{current_location.longitude}
          </p>
        </>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}

export default LocationIndicator;
