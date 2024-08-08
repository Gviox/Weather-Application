import React,{useState} from 'react'

function test() {
    const[ location, setLocation] = useState(null)

    const getUserLocation = () => {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    setLocation({latitude, longitude})
                }, (error) => {
                    console.error('cannot get error',error)
                }
            )
        } else ( 
            console.error('user not found')
        )
    }
  return (
    <div>
        <h1>Location</h1>
        <button onClick={getUserLocation}>Current location</button>
        <section>
            {location && (
                <div>
                    <p>latitude{location.latitude}</p>
                    <p>longitude{location.longitude}</p>
                </div>
            )}
        </section>
    </div>
  )
}

export default test