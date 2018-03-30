const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  1: Array(10).fill(null),
  2: Array(10).fill(null),
  3: Array(10).fill(null),
  4: Array(10).fill(null),
  5: Array(10).fill(null),
  6: Array(10).fill(null),
  7: Array(10).fill(null),
  8: Array(10).fill(null),
  9: Array(10).fill(null),
  10: Array(10).fill(null),
};

const letterCoordinate = {
  A : 0,
  B : 1,
  C : 2,
  D : 3,
  E : 4,
  F : 5,
  G : 6,
  H : 7,
  I : 8,
  J : 9
};

const ships = [];
let attempts = 0;

// GAME MANAGEMENT START

function start(){
  generateShips(ships);
  console.log(renderBoard());
  playTurn();
}

function playTurn(){
  if (ships.length > 0){
    reader.question("Where do you want to launch a Bomb? (use coordinates like B3):", handleInput);
  } else {
    console.log(`Congratulations, you won in ${attempts} attempts! ＼(＾O＾)／`);
    reader.close();
  }
}

function handleInput(input){
  attempts++;
  const coordinate = getCoordinate(input);
    if (ships.includes(input.toUpperCase())){
      updateStateWithShip(coordinate);
      ships.splice(ships.indexOf(input.toUpperCase()), 1);
      console.log(renderBoard());
      console.log("Touché!");
      playTurn();
    } else if (coordinate){
      updateState(coordinate);
      console.log(renderBoard());
      console.log("You didn\'t hit anything");
      playTurn();
    } else {
      console.log(renderBoard());
      console.log("This is not a valid move");
      playTurn();
    }
}

// GAME MANAGEMENT END

// STATE MANAGEMENT START

function getCoordinate(input){
  const letter = input[0].toUpperCase();
  let digit = input[1];
    if (input.length === 3){
      digit = parseInt(`${input[1]}${input[2]}`);
    }

  const lettersCoordinate = letterCoordinate[letter];
  if (digit < 11 && digit > 0){
    if (state[digit][lettersCoordinate] === null){
      return {lettersCoordinate : lettersCoordinate, digit : digit}
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function updateState(coordinate){
  state[coordinate.digit][coordinate.lettersCoordinate] = " ";
  return state;
}

function updateStateWithShip(coordinate){
  state[coordinate.digit][coordinate.lettersCoordinate] = "X";
  return state;
}

// STATE MANAGEMENT END

// SHIPS MANAGEMENT START

function generateShips(emptyArrayOfShips){
  const numberOfShips = Math.ceil(Math.random() * 10);
  for (let i = 1; i <= numberOfShips; i++){
    emptyArrayOfShips.push(`${["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"][Math.round(Math.random() * 9)]}${Math.ceil(Math.random() * 10)}`);
  }
  return emptyArrayOfShips;
}

// SHIPS MANAGEMENT END

// BOARD DESIGN START

function renderCell(cell){
  if (cell === null){
    return "~";
  } else {
    return cell
  }
}

function renderRow(digit){
  const cells = state[digit];
  const row = cells.map(renderCell).join(" ");
  if (digit.length === 2){
    return `${digit} ${row}\n`
  } else {
    return `${digit}  ${row}\n`
  }
}

function renderBoard(){
  let numberOfShips = ships.length;
  const header = "   A B C D E F G H I J";
  const line = Object.keys(state);
  const rows = line.map(renderRow).join(" ");
  const score = `It remains ${numberOfShips} ships`;
  return `${score}\n ${header}\n ${rows}`;
}

// BOARD DESIGN END
start();
console.log(ships);
