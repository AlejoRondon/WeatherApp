import React from 'react';
import './LocationIndicator.css';

function LocationIndicator({ location }) {
  return (
    <div className='LocationIndicator'>
      {location ? (
        <>
          <a
            style={{ display: 'block', textAlign: 'center' }}
            href={`https://maps.google.com?q=${location.lat},${location.lon}`}
            target='blank'
          >
            <i className='fas fa-map-marker-alt'></i> {`${location.name}, ${location.state}, ${location.country}`}
          </a>
          <p style={{ textAlign: 'center' }}>
            {location.lat},{location.lon}
          </p>
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading location...</p>
      )}
    </div>
  );
}

export default LocationIndicator;
