const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

const WINNING_COORDINATES = [
  [{letter: "a", digit: "0"}, {letter: "a", digit: "1"}, {letter: "a", digit: "2"}],
  [{letter: "b", digit: "0"}, {letter: "b", digit: "1"}, {letter: "b", digit: "2"}],
  [{letter: "c", digit: "0"}, {letter: "c", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "1"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "0"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "1"}, {letter: "b", digit: "1"}, {letter: "c", digit: "1"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "2"}, {letter: "c", digit: "2"}]
];

let currentPlayer;
let victoryForX = 0;
let victoryForO = 0;

function start(){
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  playTurn();
}

function handleInput(input){
  const coordinate = getCoordinate(input);
  if (coordinate){
      updateState(coordinate);
      if (haveWinner() === true){
        console.log(renderBoard());
        console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
        updateScore();
        restartGame();
      } else if (tie(state) === true){
        console.log(renderBoard());
        console.log("Looks like it\'s a tie, thanks for playing! ¯\\_(ツ)_/¯");
        restartGame();
      } else {
        switchPlayer();
        playTurn();
      }
  } else {
    console.log("This is not a valid move");
    playTurn();
  }
}

function haveWinner(){
  const isWinningLine = (line) => {
    const pattern =
      line
      .map((coordinate) => state[coordinate.letter][coordinate.digit])
      .join("");

    return pattern === "XXX" || pattern === "OOO";
  }
  return WINNING_COORDINATES.some(isWinningLine);
}

function feltCell(value){
  return value !== null;
}

function tie(state){
  const firstLine = state.a.every(feltCell);
  const secondLine = state.b.every(feltCell);
  const thirdLine = state.c.every(feltCell);
  return firstLine && secondLine && thirdLine;
}

function updateState(coordinate){
  return  state[coordinate.letter][coordinate.digit] = currentPlayer;
}

function playTurn(){
  console.log(renderBoard());
  reader.question(`${currentPlayer}, what is your move?\n`, handleInput);
}

function restartGame(){
  reader.question(`let\'s have another game? Y/N\n`, restartInput);
}

function restartInput(input){
  if (input === "Y"){
    clearState();
    start();
  } else {
    console.log("Thank you for playing, good bye!");
    reader.close();
  }
}

function clearState(){
  state = {
    a: Array(3).fill(null),
    b: Array(3).fill(null),
    c: Array(3).fill(null)
  };
  return state;
}

// BOARD DESIGN START

function renderCell(cell){
  if (cell === null){
    return "_"
  } else {
    return cell
  }
}

function renderRow(letter){
  const cells = state[letter];
  const row = cells.map(renderCell).join(" | ");
  return `${letter} ${row} \n`;
}

function renderBoard(){
  const header = "  1   2   3";
  const letters = Object.keys(state);
  const rows = letters.map(renderRow).join("");
  return `${displayScore()}\n${header}\n${rows}`
}

// BOARD DESIGN END

function getCoordinate(input){
  const letter = input[0];
  const digit = input[1] - 1;
  if (state[letter][digit] === null){
    return {letter: letter, digit: digit};
  } else {
    return null;
  }
}

function switchPlayer(){
  if (currentPlayer === "X"){
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}

function displayScore(){
  return `O ${victoryForO} - ${victoryForX} X`
}

function updateScore(){
  if (currentPlayer === "X"){
    return victoryForX++;
  } else if (currentPlayer === "O"){
    return victoryForO++;
  }
}

start();
