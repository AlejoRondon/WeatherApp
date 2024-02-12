import React from 'react';
import './CurrentDate.css';

function CurrentDate({ date }) {
  return <div className='CurrentDate'>{<p className='date'>{date ? date.short_date_str : 'Loading date...'}</p>}</div>;
}

export default CurrentDate;
