import React from 'react'

function LocationButton({getUserLocation}) {
  return (
    <section className='location-button'>
    <button onClick={getUserLocation} className='current-location'>Get Current Location Weather</button>
  </section>
  )
}

export default LocationButton