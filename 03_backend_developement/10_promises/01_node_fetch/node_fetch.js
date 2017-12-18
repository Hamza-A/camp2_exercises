const fetch = require("node-fetch");


function getBrandTitle(brandId){

  return fetch(
    `https://decath-product-api.herokuapp.com/brands/${brandId}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      return result.title;
    }
    )
    .catch((error) => {
      console.warn(error);
    });

}


function getAProduct(id){

  return fetch(
    `https://decath-product-api.herokuapp.com/products/${id}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      return Promise.all(
        [
          result,
          getBrandTitle(result.brand_id)
        ]

      );
    })
    .then((results) => {
      console.log(results[0], results[1]);
      return results;
    })
    .catch((error) => {
      console.warn(error);
    });


}

module.exports = {
  getAProduct : getAProduct,
  getBrandTitle: getBrandTitle
};


getAProduct("efe288cb-fb63-4b23-b8df-529f04b8b02b");
// getBrandTitle("9dffa1e1-59db-4401-b878-618746c0b58f");










// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=Lille&APPID=${process.env.WEATHER_TOKEN}&units=metric`,
//   {method: "GET"}
// )
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(`${json.main.temp} °C`);
//   })
//   .catch((error) => {
//     console.warn(error);
//   })



// function getMoviesByTitle(title) {
//   return client.query("SELECT * FROM movies WHERE title = $1::text", [title])
//     .then(function(result) {
//       return result.rows;
//     })
//     .then(function(rows) {
//       client.end();
//       return rows;
//     })
//     .then(function(rows) {
//       return rows.sort();
//     })
//     .catch(function(error) {
//       console.warn(error);
//       client.end();
//     });
// }
