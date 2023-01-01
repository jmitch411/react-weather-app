import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Miami",
    date: "Wednesday 4:44 PM",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 88,
    wind: 8,
    temperature: 88
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary w-100"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-success w-100">Current</button>
          </div>
        </div>
      </form>

      <h1>{weatherData.city}</h1>

      <ul>
        <li>{weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="weather-icon"
            id="icon"
          />

          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">°F</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}