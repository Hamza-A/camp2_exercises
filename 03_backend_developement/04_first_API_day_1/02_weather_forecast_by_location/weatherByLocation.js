// const request = require("request");
// const API_KEY = process.env.OPEN_WEATHER_API_KEY;
//
//
// function timeStampToDate(timestamp){
//   const date = new Date(timestamp * 1000);
//
//   return `${date.getDate()}/${date.getMonth()+ 1}/${date.getFullYear()}`;
// }
//
//
//
// function weatherByLocation(lattitude, longitude){
//   return request(
//     {
//       url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
//       method: "GET",
//     },
//
//     function(error, response, result) {
//       const json= JSON.parse(result);
//
//
//       console.log(json.list.map((forecast) => {
//         return {
//           date: timeStampToDate(forecast.dt),
//           temperature: forecast.main.temp,
//           weather: forecast.weather[0],
//         };
//       }));
//
//     }
//
//   );
// }
//
// function weatherByZipCode(zipCode, countryCode){
//   return request(
//     {
//       url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countryCode}&units=metric&APPID=${API_KEY}`,
//       method: "GET",
//     },
//
//     function(error, response, result) {
//       const json= JSON.parse(result);
//
//
//       console.log(json.list.map((forecast) => {
//         return {
//           date: forecast.dt_txt,
//           temperature: forecast.main.temp,
//           weather: forecast.weather[0],
//         };
//       }));
//
//     }
//
//   );
// }
//
// weatherByLocation(32.661343, 51.680374);
// // weatherByZipCode(94000, "fr");
//
//
// module.exports = {
//   weatherByLocation,
//   weatherByZipCode
// };


const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(latitude, longitude, callback) {
  fetchForecastsByLatitudeAndLongitude(latitude, longitude, function(json) {
    callback(json.list.map(reformatForecast));
  });
}

function fetchForecastsByLatitudeAndLongitude(latitude, longitude, callback) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result) {
      const json = JSON.parse(result);

      callback(json);
    }
  );
}

function reformatForecast(forecast) {
  return {
    date: timestampToDate(forecast.dt),
    temperature: forecast.main.temp,
    weather: {
      id: forecast.weather[0].id,
      main: forecast.weather[0].main,
      description: forecast.weather[0].description
    }
  };
}

function timestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

weatherByLatitudeAndLongitude(35, 139, function(forecasts) {
  console.log(forecasts);
});

module.exports = {
  reformatForecast: reformatForecast,
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude
};


// const weather = require("./weatherByLocation");
//
// const dummyForecast = {
//   "dt": 1513090800,
//   "main": {
//     "temp": 9.53,
//     "temp_min": 9.53,
//     "temp_max": 9.53,
//     "pressure": 1016.86,
//     "sea_level": 1026.45,
//     "grnd_level": 1016.86,
//     "humidity": 100,
//     "temp_kf": 0
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01n"
//     }
//   ],
//   "clouds": {
//     "all": 0
//   },
//   "wind": {
//     "speed": 14.21,
//     "deg": 265.001
//   },
//   "rain": {},
//   "sys": {
//     "pod": "n"
//   },
//   "dt_txt": "2017-12-12 15:00:00"
// };
//
// test("should reformat a forecast properly", function() {
//   expect(weather.reformatForecast(dummyForecast)).toEqual({
//     date: "12/12/2017",
//     temperature: 9.53,
//     weather: {
//       "id": 800,
//       "main": "Clear",
//       "description":"clear sky"
//     }
//   });
// });
