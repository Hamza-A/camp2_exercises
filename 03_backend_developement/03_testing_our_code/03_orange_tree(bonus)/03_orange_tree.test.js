const orangeTree = require("./03_orange_tree.js");

test("at 9 years old, orange tree should be 225 high", ()=>{
  orangeTree.seed();

  for (let i=0; i<9; i++){
    orangeTree.ageOneYear();
  }
  expect(orangeTree.height).toBe(225);

});


test("at 10 years old, orange tree should be 235 high", ()=>{
  orangeTree.seed();

  for (let i=0; i<10; i++){
    orangeTree.ageOneYear();
  }
  expect(orangeTree.height).toBe(235);

});

test("at 25 years old, orange tree should be 325 high", ()=>{
  orangeTree.seed();

  for (let i=0; i<25; i++){
    orangeTree.ageOneYear();
  }
  expect(orangeTree.height).toBe(325);

});

test("at 100 years old, orange tree should be die", ()=>{
  orangeTree.seed();

  for (let i=0; i<101; i++){
    orangeTree.ageOneYear();
  }
  expect(orangeTree.alive).toBeFalsy();

});

test("at 4 years old, orange tree should'nt produce any orange", ()=>{
  orangeTree.seed();

  for (let i=0; i<4; i++){
    orangeTree.ageOneYear();
  }
  expect(orangeTree.pickAnOrange()).toBeFalsy();

});

test("at 6 years old, orange tree should'nt produce any orange", ()=>{
  orangeTree.seed();

  for (let i=0; i<6; i++){
    orangeTree.ageOneYear();
  }
  expect(orangeTree.pickAnOrange()).toBeTruthy();

});
