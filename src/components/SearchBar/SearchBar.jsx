import React from 'react';
import './SearchBar.css';
import SearchInput from '../SearchInput/SearchInput';
import RoundButton from '../RoundButton/RoundButton';
function SearchBar({ searchStr, onChangeSearch, onKeyPressSearch, onClickCurrentLocation }) {
  return (
    <div className='SearchBar'>
      <SearchInput
        searchStr={searchStr}
        onChangeSearch={onChangeSearch}
        onKeyPressSearch={onKeyPressSearch}
      ></SearchInput>
      <RoundButton onClickCurrentLocation={onClickCurrentLocation}>
        <i className='toggle-password fas fa-crosshairs'></i>
      </RoundButton>
    </div>
  );
}

export default SearchBar;
