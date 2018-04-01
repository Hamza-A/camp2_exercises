const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  1: Array(7).fill(null),
  2: Array(7).fill(null),
  3: Array(7).fill(null),
  4: Array(7).fill(null),
  5: Array(7).fill(null),
  6: Array(7).fill(null),
};

const letterCoordinate = {
  A : 0,
  B : 1,
  C : 2,
  D : 3,
  E : 4,
  F : 5,
  G : 6
};

let currentPlayer;

// GAME MANAGEMENT START

function start(){
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  console.log(renderBoard());
  playTurn();
}

function playTurn(){
  reader.question(`${currentPlayer}, what is your move?\n`, handleInput);
}

function switchPlayer(){
  if (currentPlayer === "X"){
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

// GAME MANAGEMENT END

// STATE MANAGEMENT START

function handleInput(input){
  const upperInput = input.toUpperCase();
  updateState(upperInput);
  if (upperInput > "G"){
    console.log("this is not a valid move");
    playTurn();
  } else if (haveWinner()){
    console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
    reader.close();
  } else {
    switchPlayer();
    playTurn();
  }
}

function updateState(input){
  const inputCoordinate = letterCoordinate[input];
    if (state[6][inputCoordinate] === null){
      state[6][inputCoordinate] = currentPlayer;
    } else if (state[5][inputCoordinate] === null){
      state[5][inputCoordinate] = currentPlayer;
    } else if (state[4][inputCoordinate] === null){
      state[4][inputCoordinate] = currentPlayer;
    } else if (state[3][inputCoordinate] === null){
      state[3][inputCoordinate] = currentPlayer;
    } else if (state[2][inputCoordinate] === null){
      state[2][inputCoordinate] = currentPlayer;
    } else if (state[1][inputCoordinate] === null){
      state[1][inputCoordinate] = currentPlayer;
    } else {
      console.log("this column is full");
    }
  console.log(renderBoard());
  return state;
}

// STATE MANAGEMENT END

// WINNING MANAGEMENT START

function isWinningLine(board){
  for (let i = 0; i < 7; i++){
    for (let j = 1; j < 7; j++){
      const pattern = `${board[j][i]}${board[j][i + 1]}${board[j][i + 2]}${board[j][i + 3]}`;
      if (pattern === "XXXX" || pattern === "OOOO"){
        return true;
      }
    }
  }
}

function isWinningColumn(board){
  for (let i = 1; i < 4; i++){
    for (let j = 0; j < 7; j++){
      const pattern = `${board[i][j]}${board[i + 1][j]}${board[i + 2][j]}${board[i + 3][j]}`;
      if (pattern === "XXXX" || pattern === "OOOO"){
        return true;
      }
    }
  }
}

function isWinningRightDiagonal(board){
  for (let i = 1; i < 4; i++){
    for (let j = 0; j < 4; j++){
      const pattern = `${board[i][j]}${board[i + 1][j + 1]}${board[i + 2][j + 2]}${board[i + 3][j + 3]}`;
      if (pattern === "XXXX" || pattern === "OOOO"){
        return true;
      }
    }
  }
}

function isWinningLeftDiagonal(board){
  for (let i = 1; i < 4; i++){
    for (let j = 6; j > 2; j --){
      const pattern = `${board[i][j]}${board[i + 1][j - 1]}${board[i + 2][j - 2]}${board[i + 3][j - 3]}`;
      if (pattern === "XXXX" || pattern === "OOOO"){
        return true;
      }
    }
  }
}

function haveWinner(){
  return isWinningLine(state) || isWinningColumn(state) || isWinningRightDiagonal(state) || isWinningLeftDiagonal(state);
}

// WINNING MANAGEMENT END

// BOARD DESIGN START

function renderCell(cell){
  if (cell === null){
    return cell = "~";
  } else {
    return cell;
  }
}

function renderRow(digit){
  const cells = state[digit];
  const row = cells.map(renderCell).join(" ");
  return row;
}

function renderBoard(){
  const header = "A B C D E F G";
  const line = Object.keys(state);
  const board = line.map(renderRow).join("\n");
  return `${header}\n${board}`;
}

// BOARD DESIGN END

start();
