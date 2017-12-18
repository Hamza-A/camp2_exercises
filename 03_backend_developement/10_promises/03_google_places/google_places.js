const fetch = require("node-fetch");
const API_KEY = process.env.OPEN_WEATHER_API_KEY;
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getTemperatureByLatitudeAndLongitude(latitude, longitude){

  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(`${result.main.temp}°C`);
      reader.close();
    })
    .catch((error) => {
      console.warn(error);
    });


}

function getLatAndLon(place){
  console.log("Temperature in " + place+ " is:");
  return fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&key=${GOOGLE_PLACES_API_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      return Promise.all(
        [
          result,
          getTemperatureByLatitudeAndLongitude(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng)
        ]

      );
    })
    .then ((results) => {
      return (results[0], results[1]);
    })
    .catch((error) => {
      console.warn(error);
    });
}

reader.question("Which city do you want the temperature for? ", getLatAndLon);
// getLatAndLon("Paris");

// function getAProduct(id){
//
//   return fetch(
//     `https://decath-product-api.herokuapp.com/products/${id}`,
//     {method: "GET"}
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       return Promise.all(
//         [
//           result,
//           getBrandTitle(result.brand_id)
//         ]
//
//       );
//     })
//     .then((results) => {
//       console.log(results[0], results[1]);
//     })
//     .catch((error) => {
//       console.warn(error);
//     });
//
//
// }
