import React from 'react';
import './CityItem.css';

function CityItem({ cityName, onClickCityItem, cityCode }) {
  return (
    <li className='city-item' onClick={onClickCityItem} data-city-code={cityCode}>
      {cityName}
    </li>
  );
}

export default CityItem;
