const fetch = require("node-fetch");
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

function fetchWeather(city){
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .catch((error) => console.warn(error))
}

module.exports = {
  fetchWeather : fetchWeather
};
