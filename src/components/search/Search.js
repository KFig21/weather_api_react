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
  recent,
  setRecent,
}) {
  const isInvalid = cityInput === "";

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(cityInput.trim(), countryInput);
  };

  const handleRecentSearch = (city) => {
    if (!recent.includes(city)) {
      let arr = [city, ...recent];
      arr.pop();
      setRecent(arr);
    } else if (recent.includes(city)) {
      let index = recent.indexOf(city);
      recent.splice(index, 1);
      let arr = [city, ...recent];
      setRecent(arr);
    }
    getWeather(city, "", true);
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
            onFocus={() => setCityInput("")}
          />
        </div>
        <div className={`input-container input${backgroundCode}`}>
          <input
            type="text"
            placeholder="Country"
            onChange={(e) => setCountryInput(e.target.value)}
            value={`${countryInput}`}
            onFocus={() => setCountryInput("")}
          />
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
      <div className="recent">
        {recent.map((city, index) => {
          if (index > 0) {
            return (
              <span
                className={`city city${backgroundCode}`}
                onClick={() => handleRecentSearch(`${city}`)}
              >
                {city}
              </span>
            );
          }
        })}
      </div>
      <div className="error" style={error ? { opacity: 1 } : { opacity: 0 }}>
        <span>{error ? error : null}</span>
      </div>
    </div>
  );
}
