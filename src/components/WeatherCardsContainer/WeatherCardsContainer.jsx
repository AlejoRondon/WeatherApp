import React, { Children } from 'react'
import './WeatherCardsContainer.css'
function WeatherCardsContainer({ children }) {
  const mappedChildren = Children.map(children, child => <div className='Row'>{child}</div>)
  return <div className='WeatherCardsContainer'>{mappedChildren}</div>
}

export default WeatherCardsContainer
