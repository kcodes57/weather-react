import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div>
        <h1 className="City">London</h1>
        <p class="weather-app-details">
          <span className="Time"> Friday 9:00</span>,{" "}
          <span className="Description"> clear sky </span>
          <br />
          Humidity:{" "}
          <span className="Humidity">
            {"42% "}
            <strong></strong>
          </span>
          , Wind:
          <span className="Wind">
            {"7.2 km/h"}
            <strong></strong>
          </span>
        </p>
      </div>
      <div className="Container">
        <div className="Temperature"> 7</div>
        <div className="Unit">°C</div>
      </div>
    </div>
  );
}
