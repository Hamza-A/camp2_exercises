const request = require("request");
const API_KEY = process.env.OPEN_WEATHER_API_KEY;


function weatherByCity(city){
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
      method: "GET",
    },

    function(error, response, result) {
      const json= JSON.parse(result);
      console.log(`Temperature in ${json.name} is ${json.main.temp}°C`);
      return `${json.main.temp} °C`;

    }

  );
}

weatherByCity("Paris");


module.exports = weatherByCity;


//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=bac05b2987fe971de74b44d4807542d1
