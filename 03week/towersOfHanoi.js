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

function movePiece(startStack, endStack) {
  let movePieceFrom = stacks[startStack].pop();
  let movePieceTo = stacks[endStack].push(movePieceFrom);
  return movePieceTo;
}

function isLegal() {
  let fromStack = stacks[startStack];
  let toStack = stacks[endStack];

  while (fromStack[fromStack.length - 1] > toStack[toStack.length - 1]) {
    //return false
    console.log("legal move");
  } 
}

function checkForWin() {
  let win; 
  

}

function towersOfHanoi(startStack, endStack) {
  //normalize
  //checkForWin()
  isLegal(startStack, endStack);
  movePiece(startStack, endStack);
  
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

