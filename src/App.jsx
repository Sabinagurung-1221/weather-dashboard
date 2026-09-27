import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Kathmandu");
  const [searchCity, setSearchCity] = useState("");

  const forecast = [
    { day: "Monday", temp: "26°C", weather: "☀️ Sunny" },
    { day: "Tuesday", temp: "24°C", weather: "🌤️ Partly Cloudy" },
    { day: "Wednesday", temp: "23°C", weather: "🌧️ Rainy" },
    { day: "Thursday", temp: "25°C", weather: "☀️ Sunny" },
    { day: "Friday", temp: "22°C", weather: "🌦️ Light Rain" },
  ];

  const handleSearch = () => {
    if (searchCity.trim() !== "") {
      setCity(searchCity);
      setSearchCity("");
    }
  };

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>

      <p className="subtitle">
        Check the current weather information for your city.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>

<button
  className="reset-button"
  onClick={() => setCity("Kathmandu")}
>
  Reset
</button>
      </div>

      <div className="weather-card">
        <h2>{city}</h2>

        <div className="weather-icon">☀️</div>

        <h3>25°C</h3>

        <p>Sunny</p>

        <div className="weather-details">
          <p>💧 Humidity: 60%</p>
          <p>💨 Wind Speed: 10 km/h</p>
        </div>
      </div>

      <h2 className="forecast-title">5-Day Forecast</h2>

      <div className="forecast-container">
        {forecast.map((item) => (
          <div className="forecast-card" key={item.day}>
            <h3>{item.day}</h3>
            <div className="forecast-icon">
              {item.weather.split(" ")[0]}
            </div>
            <p>{item.weather.substring(2)}</p>
            <strong>{item.temp}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;