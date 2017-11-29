const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min,10);
}

let numberToSearch = getRandomArbitrary(0,100);

console.log(numberToSearch);

function check(userInput){
  let message;
  let userInput2=parseInt(userInput,10);

  if (userInput2 === numberToSearch){
    console.log("You won!");
    reader.close();
    return ;
  } else if (userInput2 > numberToSearch && userInput2 <= 100){
    message= "Too high \n" ;
  } else if (userInput2 < numberToSearch && userInput2 >= 1){
    message="Too low \n";
  }else if (userInput2 < 1 || userInput2 > 100){
    message="The number is between 1 and 100 \n";
  }else {
    message="This was not a number \n";
  }
  reader.question(message, check);
}

reader.question("Trouve le nombre entre 1 et 100 ", check);
