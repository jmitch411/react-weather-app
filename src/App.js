import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This was coded by Jasmin Mitchell and is{" "}
        <a href="https://github.com/jmitch411/react-weather-app" target="_blank" rel="noopener noreferrer" className="app-link"> open-sourced on GitHub</a>
      </footer>
    </div>
  );
}
