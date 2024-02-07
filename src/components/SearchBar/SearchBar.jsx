import React from 'react'
import './SearchBar.css'
import SearchInput from '../SearchInput/SearchInput'
import RoundButton from '../RoundButton/RoundButton'
function SearchBar() {
  return (
    <div className='SearchBar'>
      <SearchInput></SearchInput>
      <RoundButton>
        <i class='toggle-password fas fa-crosshairs'></i>
      </RoundButton>
    </div>
  )
}

export default SearchBar
