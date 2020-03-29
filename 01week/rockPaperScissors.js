// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// trim white space and convert to lowercase
const trimAndLowerCase = (response) => {
    return response.toLowerCase().trim();
}

// the function that will be called by the unit test below

const rockPaperScissors = (hand1, hand2) => {
  let answer1 = trimAndLowerCase(hand1)
  let answer2 = trimAndLowerCase(hand2)
   if (answer1 == answer2) {
    return "It's a tie!"
  } else if ( (answer1 =='rock' && answer2 == 'scissors') ||
              (answer1 == 'paper' && answer2 == 'rock') ||
              (answer1 == 'scissors' && answer2 == 'paper') ) {
      return 'Hand one wins!'
  } else {
      return 'Hand two wins!'
  }

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => { 
    answer1 = trimAndLowerCase(answer1); 
    if ( answer1 !== 'rock' && answer1 !== 'paper' && answer1 !== 'scissors') {
      console.log('Hand One, please enter a valid hand')
      getPrompt();
    }
      rl.question('hand2: ', (answer2) => {
        answer2 = trimAndLowerCase(answer2);
        if ( answer2 !== 'rock' && answer2 !== 'paper' && answer2 !== 'scissors') {
          console.log('Hand Two, please enter a valid hand')
          // find a way to make this work properly
        } 
          console.log( rockPaperScissors(answer1, answer2) );
          getPrompt(); 
    }); 
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
