import React from "react";
import "./search.scss";
import SearchIcon from "@material-ui/icons/Search";

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
    getWeather(cityInput, countryInput);
  };

  return (
    <div className="search">
      <form action="">
        <input
          className={`input${backgroundCode}`}
          type="text"
          placeholder="City"
          onChange={(e) => setCityInput(e.target.value)}
        />
        <input
          className={`input${backgroundCode}`}
          type="text"
          placeholder="Country"
          onChange={(e) => setCountryInput(e.target.value)}
        />
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
