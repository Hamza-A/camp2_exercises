require("sepia");
const open_weather = require("./open_weather");

test("should return a temperature", () => {
  expect.assertions(1);

  return open_weather.getTemperatureFromCityName("London")
    .then(result => {
      expect(result.main.temp).toBeLessThan("80");
    });

});
