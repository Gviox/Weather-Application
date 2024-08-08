import React, { useState } from 'react';
import axios from 'axios';

// Axios is a popular library used for making HTTP requests from browsers or Node.js
// It simplifies handling asynchronous HTTP requests and responses
// In this application, we use Axios to fetch weather data from the OpenWeatherMap API

// Component for fetching and displaying weather information
function App() {
  // State variables to manage weather data and location input
  const [data, setData] = useState({}); // State to hold weather data
  const [location, setLocation] = useState(''); // State to manage location input
  const apiKey = '706154e066a3b7a11e6eb6f59753585b'; // API key for OpenWeatherMap


  // In ReactJS, we can find a user's current geolocation using the JavaScript Geolocation API.
  // Function to fetch user's geolocation and get weather data
  const getUserLocation = () => {
    if (navigator.geolocation) {
      // If geolocation is supported, get current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // We will now create two variables to store these coordinates for later use.
          const { latitude, longitude } = position.coords;
          // Call function to fetch weather based on coordinates
          getWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Function to fetch weather data by coordinates using Axios
  const getWeatherByCoordinates = (latitude, longitude) => {
    // Construct URL with coordinates and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    // Make GET request using Axios
    axios.get(url).then((response) => {
      // Set state with response data to update UI
      setData(response.data);
      console.log(response.data); // Log data to console for debugging
    }).catch((error) => {
      console.error('Error fetching weather data:', error);
    });
  };

  // Function to search weather by location entered using Axios
  const searchLocation = (event) => {
    // Check if Enter key is pressed in the input field
    if (event.key === 'Enter') {
      // Construct URL with location and API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
      // Make GET request using Axios
      axios.get(url).then((response) => {
        // Set state with response data to update UI
        setData(response.data);
        console.log(response.data); // Log data to console for debugging
      }).catch((error) => {
        console.error('Error fetching weather data:', error);
      });
      // Clear input field after search
      setLocation('');
    }
  };

  // JSX to render UI components
  return (
    <div className='App'>
      {/* Search input section */}
      <section className='search'>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder='Enter Location'
        />
      </section>

      {/* Main weather display container */}
      <div className='container'>
        <div className='top'>
          {/* Display location name */}
          <div className='location'>
            <p>{data.name}</p>
          </div>
          {/* Display temperature */}
          <div className='temperature'>
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          {/* Display weather description */}
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {/* Button to get current location weather */}
        <section className='location-button'>
          <button onClick={getUserLocation} className='current-location'>Get Current Location Weather</button>
        </section>

        {/* Additional weather details */}
        <div className='bottom'>
          {/* Display 'Feels like' temperature */}
          <div className='feels'>
            {data.main ? <p>{data.main.feels_like}</p> : null}
            <p className='bold'>Feels Like</p>
          </div>
          {/* Display humidity percentage */}
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p className='bold'>Humidity</p>
          </div>
          {/* Display wind speed */}
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed} m/s</p> : null}
            <p className='bold'>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;