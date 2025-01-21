import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current-container">
      <div>
        <h1 className="City">London</h1>
        <p className="Weather-app-details">
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
      <div className="Temperature-container">
        <div className="Temperature">
          {" "}
          7<span className="Unit">°C</span>
        </div>
      </div>
    </div>
  );
}
