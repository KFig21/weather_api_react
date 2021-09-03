import React from "react";
import "./forecast.scss";

export default function Forecast({ forecast, tempType, backgroundCode }) {
  return (
    <div className={`forecast-container bg${backgroundCode}`}>
      {forecast.map((day, index) => {
        const {
          date,
          minFahrenheit,
          maxFahrenheit,
          minCelcius,
          maxCelcius,
          icon,
        } = day;
        return (
          <div className="day-container">
            <span className="date">{date}</span>
            <div className="icon-container">
              <i className={`wi ${icon}`}></i>
            </div>
            {/* min and max temps */}
            <span className="minmax-container">
              <span className="max-temp">
                {tempType === "imperial"
                  ? `${maxFahrenheit}°`
                  : `${maxCelcius}°`}
              </span>
              <span>/</span>
              <span className="min-temp">
                {tempType === "imperial"
                  ? `${minFahrenheit}°`
                  : `${minCelcius}°`}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
