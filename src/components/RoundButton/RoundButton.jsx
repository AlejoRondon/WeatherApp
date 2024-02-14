import React from 'react';
import './RoundButton.css';
function RoundButton({ children, onClickCurrentLocation }) {
  return (
    <p className='round-btn' onClick={onClickCurrentLocation}>
      {React.Children.toArray(children)[0]}
    </p>
  );
}

export default RoundButton;
