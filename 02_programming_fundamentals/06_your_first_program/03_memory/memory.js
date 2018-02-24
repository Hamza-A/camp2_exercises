// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];

function check(firstInput, secondInput){
  const firstCard = cards[firstInput];
  const secondCard = cards[secondInput];

  if (firstCard === secondCard){
    console.log(firstCard + "  " + secondCard);
    console.log("its a match!");
  } else {
    console.log(firstCard + "  " + secondCard);
    console.log("try again!");
  }
  reader.close();
}

check(0, 3);
