import React from 'react'

function UserLocation({location, searchLocation, setLocation}) {
  return (
    <section className='search'>
    <input
      value={location}
      onChange={(event) => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      type="text"
      placeholder='Enter Location'
    />
  </section>
  )
}

export default UserLocation