import React from 'react'

function WeatherDetails({data}) {
  return (
    <div className='bottom'>
      <div className='feels'>
        {data.main ? <p>{data.main.feels_like}</p> : null}
        <p className='bold'>Feels Like</p>
      </div>
      <div className='humidity'>
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        <p className='bold'>humidity</p>
      </div>
      <div className='wind'>
        {data.wind ? <p className='bold'>{data.wind.speed} m/s</p> : null}
        <p className='bold'>Wind Speed</p>
      </div>
    </div>
  )
}

export default WeatherDetails