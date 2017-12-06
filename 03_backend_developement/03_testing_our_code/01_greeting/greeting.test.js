const greet = require("./greeting.js");


test("It should return Hello NAME", ()=>{
  const result = greet("Hamza");
  expect(result).toBe("Hello HAMZA!");

});

test("It should return Hello WORLD", ()=>{
  const result = greet();
  expect(result).toBe("Hello WORLD!");

});
