import React from "react";
import "./weather.scss";

export default function Weather({
  now,
  tempType,
  handleTempType,
  backgroundCode,
}) {
  const {
    name,
    fahrenheit,
    minFahrenheit,
    maxFahrenheit,
    celcius,
    minCelcius,
    maxCelcius,
    icon,
    description,
  } = now;

  return (
    <div className="weather">
      <div className="weather-container">
        <div className={`bg${backgroundCode}`}>
          <h1>{name}</h1>
          <div className={`info-container`}>
            <div className="side">
              <div className="icon-container">
                <i className={`wi ${icon}`}></i>
              </div>
            </div>
            <div className="side">
              {" "}
              <h2 className="current-temp" onClick={handleTempType}>
                {tempType === "imperial" ? `${fahrenheit}°F` : `${celcius}°C`}
              </h2>
              {/* min and max temps */}
              <h3>
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
              </h3>
              <h4 className="description">{description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
