require("sepia");
const node_fetch = require("./node_fetch.js");

test("should return a QUECHUA product", () => {
  expect.assertions(1);

  return node_fetch.getAProduct("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then(brand => {
      expect(brand[1]).toEqual("QUECHUA");
    });

});

test("should return undefined", () => {
  expect.assertions(1);

  return node_fetch.getAProduct("efe288cb-fb6ggf3-4b23-b8df-529f04b8b02b")
    .then(brand => {
      expect(brand[1]).toBeUndefined();
    });

});
