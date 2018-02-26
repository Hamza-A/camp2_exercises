const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rightNumber = (Math.round(Math.random() * 100));

console.log(rightNumber);

function tryToGuessRightNumber(userInput){
  let message;
  let parsedInput = parseInt(userInput, 10);
  if (parsedInput < 1 || parsedInput > 100) {
    message = "Out of range, please choose a number between 1 and 100 \n";
  } else if (parsedInput > rightNumber) {
    message = "tow high, try again \n";
  } else if (parsedInput === rightNumber) {
    console.log("You won!");
    reader.close();
    return;
  } else if (parsedInput < rightNumber){
    message = "tow low, try again \n";
  } else {
    message = "please type a number \n";
  }
  reader.question(message, tryToGuessRightNumber);
}

reader.question("Try to guess the right number: \n", tryToGuessRightNumber);
