import React from 'react';
import './CityListElement.css';

function CityListElement({ city_name, onClickCityItem, code }) {
  return (
    <div className='CityListElement'>
      <li onClick={onClickCityItem} code={code}>
        {city_name}
      </li>
    </div>
  );
}

export default CityListElement;
