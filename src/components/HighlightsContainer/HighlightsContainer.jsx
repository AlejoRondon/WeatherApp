import React, { Children } from 'react';
import './HighlightsContainer.css';
function HighlightsContainer({ children }) {
  const mappedChildren = Children.map(children, (child) => <div className='Row'>{child}</div>);
  return (
    <div className='highlights-container'>
      <p className='highlights-section-title'>Today’s Hightlights </p>
      <div className='highlights-grid'>{mappedChildren}</div>
    </div>
  );
}

export default HighlightsContainer;
