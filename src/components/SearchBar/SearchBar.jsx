import React from 'react';
import './SearchBar.css';
import SearchInput from '../SearchInput/SearchInput';
import RoundButton from '../RoundButton/RoundButton';
function SearchBar({ search_str, onChangeSearch, onKeyPressSearch, onClickCurrentLocation }) {
  return (
    <div className='SearchBar'>
      <SearchInput
        search_str={search_str}
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
