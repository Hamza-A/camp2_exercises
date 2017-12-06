const toWords = require("./to_words.js");

test("It should return a splited sentence", ()=>{
  const result = toWords("Hello, World! How are you doing today?");
  expect(result).toEqual(["Hello","World","How","are","you","doing","today"]);

});

test("It should return a splited sentence", ()=>{
  const result = toWords("Hello, [World! How are you doing today?");
  expect(result).toEqual(["Hello","World","How","are","you","doing","today"]);

});



test("It should return an error if sentence is a number", ()=>{
  expect(() => toWords(7.89)).toThrow();

});
