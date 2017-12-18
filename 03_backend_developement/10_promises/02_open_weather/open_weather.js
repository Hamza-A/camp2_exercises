const fetch = require("node-fetch");
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

function getTemperatureFromCityName(city){

  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.main.temp);
    })
    .catch((error) => {
      console.warn(error);
    });


}


function getTemperatureByLatitudeAndLongitude(latitude, longitude){

  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.main.temp);
    })
    .catch((error) => {
      console.warn(error);
    });


}

getTemperatureFromCityName("London");
getTemperatureByLatitudeAndLongitude(32.661343, 51.680374);

module.exports= {
  getTemperatureFromCityName: getTemperatureFromCityName,
  getTemperatureByLatitudeAndLongitude: getTemperatureByLatitudeAndLongitude
};




// function getBrandTitle(brandId){
//
//   return fetch(
//     `https://decath-product-api.herokuapp.com/brands/${brandId}`,
//     {method: "GET"}
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result.title);
//     }
//     )
//     .catch((error) => {
//       console.warn(error);
//     });
//
// }
