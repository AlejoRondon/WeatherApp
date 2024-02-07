import React, { Children } from 'react'

function WeatherFrame({ children }) {
  const mappedChildren = Children.map(children, child => <div className='Row'>{child}</div>)
  return <>{mappedChildren}</>
}

export default WeatherFrame
