import React from 'react';
import './SearchInput.css';

function SearchInput({ searchStr, onChangeSearch, onKeyPressSearch }) {
  return (
    <input
      className='SearchInput'
      value={searchStr}
      type='text'
      placeholder='Search for places'
      onChange={onChangeSearch}
      onKeyUp={onKeyPressSearch}
    ></input>
  );
}

export default SearchInput;
