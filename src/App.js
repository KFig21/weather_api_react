import { useEffect, useState } from "react";
import "./app.scss";
import "weather-icons/css/weather-icons.css";
import Weather from "./components/weather/Weather";
import Search from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";
import canyonBGI from "./assets/background-canyon.jpg";
import sunnyBGI from "./assets/background-sunny.jpg";
import drizzleBGI from "./assets/background-drizzle.jpg";
import rainBGI from "./assets/background-rain.jpg";
import stormBGI from "./assets/background-storm.jpg";
import snowBGI from "./assets/background-snow.jpg";
import cloudBGI from "./assets/background-cloud.jpg";
import cloudBGI801 from "./assets/background-cloud-801.jpg";
import cloudBGI802 from "./assets/background-cloud-802.jpg";
import cloudBGI803 from "./assets/background-cloud-803.jpg";
import cloudBGI804 from "./assets/background-cloud-804.jpg";
import fogBGI from "./assets/background-fog.jpg";

const API_key = "e705fd2733337e25a8b91977646312e1";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [now, setNow] = useState({});
  const [tempType, setTempType] = useState("imperial");
  // set longitude and latitude to get 5 day forecast
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  const [backgroundCode, setBackgroundCode] = useState(null);
  const [recent, setRecent] = useState([
    "New York",
    "Los Angeles",
    "Tokyo",
    "London",
    "Sydney",
  ]);

  const convertToMetric = (x) => {
    return x - 273.15;
  };
  const convertToImperial = (x) => {
    return ((x - 273.15) * 9) / 5 + 32;
  };
  function formatDate(date) {
    return new Date(date * 1000)
      .toLocaleDateString("en-US", {
        timeZone: "UTC",
      })
      .slice(0, -5);
  }
  const handleTempType = () => {
    tempType === "imperial" ? setTempType("metric") : setTempType("imperial");
    console.log(tempType);
  };
  const getIcon = (rangeId, bool) => {
    // current day bool = true which allows the backgrounf img to change
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        if (bool === true) setBackgroundCode(200);
        return "wi-thunderstorm";
        break;
      case rangeId >= 300 && rangeId <= 321:
        if (bool === true) setBackgroundCode(300);
        return "wi-sleet";
        break;
      case rangeId >= 500 && rangeId <= 521:
        if (bool === true) setBackgroundCode(500);
        return "wi-storm-showers";
        break;
      case rangeId >= 600 && rangeId <= 622:
        if (bool === true) setBackgroundCode(600);
        return "wi-snow";
        break;
      case rangeId >= 701 && rangeId <= 781:
        if (bool === true) setBackgroundCode(700);
        return "wi-fog";
        break;
      case rangeId === 800:
        if (bool === true) setBackgroundCode(800);
        return "wi-day-sunny";
        break;
      case rangeId >= 801 && rangeId <= 804:
        if (bool === true && rangeId === 801) setBackgroundCode(801);
        if (bool === true && rangeId === 802) setBackgroundCode(802);
        if (bool === true && rangeId === 803) setBackgroundCode(803);
        if (bool === true && rangeId === 804) setBackgroundCode(804);
        return "wi-day-fog";
        break;
      default:
        if (bool === true) setBackgroundCode(801);
        return "wi-day-fog";
    }
  };

  const getWeather = async (city, country) => {
    // call api
    const weather_api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
    );
    // convert to json
    const weatherCall = await weather_api_call.json();
    // check if city exists
    if (weatherCall.cod === "404") {
      setError(weatherCall.message);
      return;
    }
    // fetch forecast data with longitude and latitude
    const forecast_api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherCall.coord.lat}&lon=${weatherCall.coord.lon}&exclude=minutely,hourly,alerts&appid=${API_key}`
    );
    const forecastCall = await forecast_api_call.json();
    console.log("weatherCall", weatherCall);
    console.log("forecastCall", forecastCall);

    setLat(weatherCall.coord.lat);
    setLon(weatherCall.coord.lon);

    // set current weather
    setNow({
      name: weatherCall.name,
      date: formatDate(weatherCall.dt),
      fahrenheit: Math.round(convertToImperial(weatherCall.main.temp)),
      minFahrenheit: Math.round(convertToImperial(weatherCall.main.temp_min)),
      maxFahrenheit: Math.round(convertToImperial(weatherCall.main.temp_max)),
      celcius: Math.round(convertToMetric(weatherCall.main.temp)),
      minCelcius: Math.round(convertToMetric(weatherCall.main.temp_min)),
      maxCelcius: Math.round(convertToMetric(weatherCall.main.temp_max)),
      icon: getIcon(weatherCall.weather[0].id, true),
      description: weatherCall.weather[0].description,
    });

    //set recent
    if (!recent.includes(weatherCall.name)) {
      let arr = [weatherCall.name, ...recent];
      arr.pop();
      setRecent(arr);
    }

    // set next 7 day forecast
    let forecastArr = [];
    for (let i = 1; i < 8; i++) {
      let obj = {};
      obj.date = formatDate(forecastCall.daily[i].dt);
      obj.minFahrenheit = Math.round(
        convertToImperial(forecastCall.daily[i].temp.min)
      );
      obj.maxFahrenheit = Math.round(
        convertToImperial(forecastCall.daily[i].temp.max)
      );
      obj.minCelcius = Math.round(
        convertToMetric(forecastCall.daily[i].temp.min)
      );
      obj.maxCelcius = Math.round(
        convertToMetric(forecastCall.daily[i].temp.max)
      );
      obj.icon = getIcon(forecastCall.daily[i].weather[0].id, false);
      forecastArr.push(obj);
    }
    console.log(forecastArr);
    setError("");
    setForecast(forecastArr);
  };

  useEffect(() => {
    getWeather("New York");
  }, []);

  return (
    <div className="App">
      <div className="day-info">
        {new Date().toLocaleDateString("en-US", {
          timeZone: "UTC",
        })}
      </div>
      <div className="temp-info">
        <span onClick={() => handleTempType()}>
          {tempType === "imperial" ? "F°" : "C°"}
        </span>
      </div>
      <div className="content">
        <Search
          cityInput={cityInput}
          countryInput={countryInput}
          setCityInput={setCityInput}
          setCountryInput={setCountryInput}
          getWeather={getWeather}
          error={error}
          backgroundCode={backgroundCode}
          recent={recent}
          setRecent={setRecent}
        />
        {now.name !== undefined && (
          <div className="lower-content">
            <Weather
              now={now}
              tempType={tempType}
              handleTempType={handleTempType}
              backgroundCode={backgroundCode}
            />
            <Forecast
              forecast={forecast}
              tempType={tempType}
              backgroundCode={backgroundCode}
            />
          </div>
        )}
      </div>
      <img
        style={backgroundCode === 200 ? { opacity: 1 } : { opacity: 0 }}
        src={stormBGI}
        alt="thunderstorm"
      />
      <img
        style={backgroundCode === 300 ? { opacity: 1 } : { opacity: 0 }}
        src={rainBGI}
        alt="drizzle"
      />
      <img
        style={backgroundCode === 500 ? { opacity: 1 } : { opacity: 0 }}
        src={rainBGI}
        alt="showers"
      />
      <img
        style={backgroundCode === 600 ? { opacity: 1 } : { opacity: 0 }}
        src={snowBGI}
        alt="snow"
      />
      <img
        style={backgroundCode === 700 ? { opacity: 1 } : { opacity: 0 }}
        src={fogBGI}
        alt="fog"
      />
      <img
        style={backgroundCode === 800 ? { opacity: 1 } : { opacity: 0 }}
        src={sunnyBGI}
        alt="sunny"
      />
      <img
        style={backgroundCode === 801 ? { opacity: 1 } : { opacity: 0 }}
        src={cloudBGI801}
        alt="few clouds"
      />
      <img
        style={backgroundCode === 802 ? { opacity: 1 } : { opacity: 0 }}
        src={cloudBGI802}
        alt="scattered clouds"
      />
      <img
        style={backgroundCode === 803 ? { opacity: 1 } : { opacity: 0 }}
        src={cloudBGI803}
        alt="broken clouds"
      />
      <img
        style={backgroundCode === 804 ? { opacity: 1 } : { opacity: 0 }}
        src={cloudBGI804}
        alt="overcast clouds"
      />
    </div>
  );
}

export default App;
