import React, { Children } from 'react'
import './HighlightsContainer.css'
function HighlightsContainer({ children }) {
  const mappedChildren = Children.map(children, child => <div className='Row'>{child}</div>)
  return <div className='HighlightsContainer'>{mappedChildren}</div>
}

export default HighlightsContainer
