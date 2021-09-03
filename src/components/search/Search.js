import React from "react";
import "./search.scss";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export default function Search({
  cityInput,
  countryInput,
  setCityInput,
  setCountryInput,
  getWeather,
  error,
  backgroundCode,
}) {
  const isInvalid = cityInput === "";

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(cityInput.trim(), countryInput);
  };

  const handleClearCity = (e) => {
    e.preventDefault();
    setCityInput("");
  };

  const handleClearCountry = (e) => {
    e.preventDefault();
    setCountryInput("");
  };

  return (
    <div className="search">
      <form action="">
        <div className={`input-container input${backgroundCode}`}>
          <input
            type="text"
            placeholder="City"
            onChange={(e) => setCityInput(e.target.value)}
            value={`${cityInput}`}
          />
          <button
            tabindex="-1"
            className="clear-input"
            onClick={handleClearCity}
          >
            <CloseIcon />
          </button>
        </div>
        <div className={`input-container input${backgroundCode}`}>
          <input
            type="text"
            placeholder="Country"
            onChange={(e) => setCountryInput(e.target.value)}
            value={`${countryInput}`}
          />
          <button
            tabindex="-1"
            className="clear-input"
            onClick={handleClearCountry}
          >
            <CloseIcon />
          </button>
        </div>
        <button
          className={`button${backgroundCode}`}
          disabled={isInvalid}
          type="submit"
          onClick={handleSearch}
        >
          <SearchIcon />
        </button>
      </form>
      <div className="error" style={error ? { opacity: 1 } : { opacity: 0 }}>
        <span>{error ? error : null}</span>
      </div>
    </div>
  );
}
