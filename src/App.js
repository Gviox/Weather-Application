import React, {useState} from 'react'
import axios from 'axios'
import LocationButton from './LocationButton.js';
import WeatherDisplay from './WeatherDisplay.js';
import WeatherDetails from './WeatherDetails.js';
import UserLocation from './userLocationButton.js';

// 706154e066a3b7a11e6eb6f59753585b
//`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

function App() {
  const[data, setData] =useState({});
  const[location,setLocation] = useState('');
  const apiKey = '706154e066a3b7a11e6eb6f59753585b'

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  
  const getWeatherByCoordinates = (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  
  const searchLocation = (event) => {
    if ( event.key === 'Enter'){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`; 
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
<div className='App'>
    <UserLocation location={location} setLocation={setLocation} searchLocation={searchLocation} />
  <div className='container'>
    <WeatherDisplay data={data} />
    <LocationButton getUserLocation={getUserLocation} />
    <WeatherDetails data={data} />
  </div>
</div>           
  )
}

export default App