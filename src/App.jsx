import "./App.css";

function App() {
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
        />
        <button>Search</button>
      </div>

      <div className="weather-card">
        <h2>Kathmandu</h2>

        <div className="weather-icon">☀️</div>

        <h3>25°C</h3>

        <p>Sunny</p>

        <div className="weather-details">
          <p>💧 Humidity: 60%</p>
          <p>💨 Wind Speed: 10 km/h</p>
        </div>
      </div>
    </div>
  );
}

export default App;