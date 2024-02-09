import React, { useState, useEffect } from 'react';
import './CurrentDate.css';
import getCurrentDate from '../../services/DateService';

function CurrentDate() {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(getCurrentDate());
  }, []);
  return (
    <div className='CurrentDate'>
      <p className='date'>{date}</p>
    </div>
  );
}

export default CurrentDate;
