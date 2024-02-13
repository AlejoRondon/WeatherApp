import React from 'react';
import './HighlightCard.css';

function HighlightCard({ title, value, units }) {
  return (
    <div className='HighlightCard'>
      <p>{title}</p>
      <p className='number'>
        {value ? value : '--'}
        <span className='units'>{units}</span>
      </p>
    </div>
  );
}

export default HighlightCard;
