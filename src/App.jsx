import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Weather Dashboard</h1>

      <p className="subtitle">
        Check the current weather information for your city.
      </p>

      <div className="weather-card">
        <h2>Kathmandu</h2>
        <p>🌡️ Temperature: 25°C</p>
        <p>☀️ Weather: Sunny</p>
        <p>💧 Humidity: 60%</p>
        <p>💨 Wind Speed: 10 km/h</p>
      </div>
    </div>
  );
}

export default App;