import React, { useState, useEffect } from 'react';
import './weather.css';

const apiKey = "4fcb5ed9cde665455d65c148d4f36d9d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [city]);

  return (
    <div className="weather-app">
      <h1>1Page.click</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      </form>
      <button onClick={handleSearch}>Search</button>
      {weatherData && weatherData.main && (
        <div>
          <h2>{weatherData.name} Weather </h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} km/h</p>
          
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Weather;