'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  let start = stacks[startStack];
  let end = stacks[endStack];

  let movePieceFrom = start.pop();

  end.push(movePieceFrom);

  checkForWin();
}

function isLegal(startStack, endStack) {
  let start = stacks[startStack];
  let end = stacks[endStack];

  if ((end.length === 0) || (start[start.length-1] < end[end.length-1]) )  {
    return true;
    //movePiece(startStack,endStack);
    } else if (start[start.length-1] > end[end.length-1]) {
      return false;
    }
    else {
      return false;
    }
}

function checkForWin() {
  // If an eligible stack's length is equal to the length of a winning tower (4), the check returns true. 
  // Otherwise, false is returned. 
  // When the user wins, true is returned and passed to getPrompt() which then alerts the user to their win and ends game play. 
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // If a legal move is played, a ring can be moved to the selected tower. If an illegal move is played, the user receives an error message, their move is NOT logged, and they receive a new selection prompt.
  if (isLegal(startStack,endStack)) {
    movePiece(startStack, endStack);
  } else {
    console.log("Not a legal move! \n Please try again.");
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      if (checkForWin() === true) {
        console.log(`Tower ${endStack} is built! \n You Win! `);
      } else {
      getPrompt();
      }
    });
  });
}





// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
