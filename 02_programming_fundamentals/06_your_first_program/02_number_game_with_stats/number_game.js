const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rightNumber = (Math.round(Math.random() * 100));

console.log(rightNumber);
let numberOfTries = 0;

function tryToGuessRightNumber(userInput){
  let message;
  let parsedInput = parseInt(userInput, 10);
  numberOfTries ++;
  if (parsedInput < 1 || parsedInput > 100) {
    message = "The number is between 1 and 100\n";
  } else if (parsedInput > rightNumber) {
    message = "Too high\n";
  } else if (parsedInput === rightNumber) {
    console.log(`You won in ${numberOfTries} steps!`);
    reader.close();
    return;
  } else if (parsedInput < rightNumber){
    message = "Too low\n";
  } else {
    message = "This was not a number\n";
  }
  reader.question(message, tryToGuessRightNumber);
}

reader.question("Try to guess the right number: \n", tryToGuessRightNumber);
