// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
let firstCard;
let secondCard;

function checkFirstDigit(firstInput){
  firstCard = cards[firstInput];
  console.log(firstCard);
  reader.question("Select a second digit between 0 and 5\n", checkSecondDigit);
  return firstCard;
}

function checkSecondDigit(secondInput){
  secondCard = cards[secondInput];
  console.log(secondCard);
  finalCheck();
  return cards[secondInput];
}

function finalCheck(){
  if (firstCard === secondCard){
    console.log("It's a match!");
    reader.close();
  } else {
    clear();
    console.log("Try again");
    reader.question("Select one digit between 0 and 5\n", checkFirstDigit);
  }
}

reader.question("Select one digit between 0 and 5\n", checkFirstDigit);
