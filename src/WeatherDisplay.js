import React from 'react'

function WeatherDisplay({data}) {
  return (
     <div className='top'>
    <div className='location'>
      <p>Weather in: {data.name}</p>
    </div>
    <div className='temperature'>
      {data.main ? <h1>{data.main.temp}°F</h1> : null}
    </div>
    <div className='description'>
    {data.weather ? <p>{data.weather[0].main}</p> : null}
  </div>
  </div>
  )
}

export default WeatherDisplay