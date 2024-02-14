import React from 'react';
import './SearchInput.css';

function SearchInput({ search_str, onChangeSearch, onKeyPressSearch }) {
  return (
    <input
      className='SearchInput'
      value={search_str}
      type='text'
      placeholder='Search for places'
      onChange={onChangeSearch}
      onKeyUp={onKeyPressSearch}
    ></input>
  );
}

export default SearchInput;
