const request = require("request");
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];

function weatherByLatitudeAndLongitude(lat, lon){
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`,
      method: "GET",
      headers: {
        "Authorization": "bearer <TOKEN>"
      }
    },
    function(error, response, result) {
      const json = JSON.parse(result);

      console.log(json);
    }
  );
}

stores.map(weatherByLatitudeAndLongitude);
