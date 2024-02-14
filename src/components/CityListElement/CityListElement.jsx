import React from 'react';
import './CityListElement.css';

function CityListElement({ name }) {
  return (
    <div className='CityListElement'>
      <li>{name}</li>
    </div>
  );
}

export default CityListElement;
