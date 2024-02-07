import React from 'react';
import './RoundButton.css';
function RoundButton({ children }) {
  return (
    <a href='hello' className='round-btn'>
      {React.Children.toArray(children)[0]}
    </a>
  );
}

export default RoundButton;
