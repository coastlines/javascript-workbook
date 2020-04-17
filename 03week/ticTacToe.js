'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for (let i = 0; i < board.length; i++) {
    //checks to see if the initial position is not empty and if horizontal win conditions are true
    if(board[i][0] != ' ' && board[i][0] == board[i][1] && board[i][1] == board[i][2])
    return true
  }
}

function verticalWin() {
  for (let i = 0; i < board.length; i++) {
    //checks to see if the initial position is not empty and if vertical win conditions are true
    if(board[0][i] != ' ' && board[0][i] == board[1][i] && board[1][i] == board[2][i])
    return true
  }
}

function diagonalWin() {
    //checks to see if the initial position is not empty and if diagonal win conditions are true
    if(board[1][1] != ' ' && ((board[1][1] == board[0][0] && board[0][0] == board[2][2]) || (board[1][1] == board[0][2] && board[0][2] == board[2][0])))
    return true
}

function checkForWin() {
  // checks to see if any of the win functions return true
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  } 
}

function ticTacToe(row, column) {
  //assign the input to the current player
  board[row][column] = playerTurn;

  //check to see if anyone has won, alerts players to winner if true, if not, switches players
  if (checkForWin()) {
    console.log(playerTurn + ' wins!');
  } else if (playerTurn === 'X') {
    playerTurn = "O";
  } else {
    playerTurn = 'X';
  } 

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
