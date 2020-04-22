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
   // Variables store the users current turn selection for clarity
  let start = stacks[startStack];
  let end = stacks[endStack];

  // The item that will be moved is removed from the end of the array and stored in a variable.
  let movePieceFrom = start.pop();
  // The item being moved is passed into the push method and attached to the end of the destination array.
  end.push(movePieceFrom);
  // After the item has been moved, checkForWin() is called to see if game play should continue, or if the user has won.
  checkForWin();
}

function isLegal(startStack, endStack) {
  // Variables store the users current turn selection for clarity
  // Trims whitespace and converts the player's selection to lowercase
  let start = stacks[startStack.trim().toLowerCase()];
  let end = stacks[endStack.trim().toLowerCase()];

  // If the destination array, endStack, is empty OR if the last item in the destination array is larger than the item being moved, the move is legal and the statement returns true. 
  if ((end.length === 0) || (start[start.length-1] < end[end.length-1]) && ((start === 'stacks.a' || start === 'stacks.b' || start === 'stacks.c') && (end === 'stacks.a' || end === 'stacks.b' || end === 'stacks.c'))) {
    return true;
  // If the item being placed is larger than the last item in the destination array, the move is illegal and the statement evaluates to false.
    } else if ((start[start.length-1] > end[end.length-1]) || ((start !== 'stacks[a]' || start !== 'stacks[b]' || start !== 'stacks[c]') && (end !== 'stacks[a]' || end !== 'stacks[b]' || end !== 'stacks[c]'))) {
      return false;
    }
  // Anything not expressly defined as a legal or illegal move is considered illegal and returns false.
    else {
      return false;
    }
}

function checkForWin() {
  // If an eligible stack's length is equal to the length of a winning tower (4), the check returns true. 
  // Otherwise, false is returned. 
  // Additionally, when the user wins, true is returned and passed to getPrompt() which then alerts the user to their win and ends game play. 
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // trims whitespace and converts the player's selection to lowercase
  startStack = startStack.trim().toLowerCase();
  endStack = endStack.trim().toLowerCase();

  // determine if a valid move was selected by the player
 


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
      // When the user wins, they receive the message below and game play ends. Otherwise, game play continues.
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

    // it should strip whitespace -- additional test
    it('strip whitespace', () => {
      towersOfHanoi('  a', ' b ');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });

    // it should convert input to lowercase -- additional test
    it('convert input to lowercase', () => {
      towersOfHanoi('A', 'B');
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

    // it should block a user from choosing the same destination as their origination as their move + alert them to the illegal move -- additional test
    it('alert the user if they attempt an illegal move', () => {
    stacks = {
      a: [4, 3, 2],
      b: [1],
      c: []
    };
    assert.equal(isLegal('a', 'a'), false);
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
