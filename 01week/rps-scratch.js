const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

let player1Name = capitalize(prompt ("Player 1, what is your name?"));
let player2Name = capitalize(prompt ("Player 2, what is your name?"));

let player1 = prompt(player1Name + ": Rock, Paper or Scissors?").toLowerCase().trim()
let player2 = prompt(player2Name + ": Rock, Paper or Scissors?").toclearLowerCase().trim()

const rps = (player1, player2) => {
  if (player1 == player2) {
    return "It's a draw!"
  } else if ( (player1 === 'rock' && player2 === 'scissors') ||
              (player1 === 'paper' && player2 === 'rock') ||
              (player1 === 'scissors' && player2 === 'paper') ) {
    return capitalize(player1) + " beats " + player2 + ', ' + player1Name + " wins!" 
  } else {
    return capitalize(player2) + " beats " + player1 + ', ' + player2Name + " wins!"
  }
}



// if (answer1 == answer2) {
//   return "It's a draw!"
// } else if ( (answer1 === 'rock' && answer2 === 'scissors') ||
//             (answer1 === 'paper' && answer2 === 'rock') ||
//             (answer1 === 'scissors' && answer2 === 'paper') ) {
//   return capitalize(answer1) + " beats " + answer2 + ', ' + player1Name + " wins!" 
// } else {
//   return capitalize(answer2) + " beats " + answer1 + ', ' + player2Name + " wins!"
// }

// if (answer1 == answer2) {
//   return "It's a draw!"
// } else if ( (answer1 === 'rock' && answer2 === 'scissors') ||
//             (answer1 === 'paper' && answer2 === 'rock') ||
//             (answer1 === 'scissors' && answer2 === 'paper') ) {
//   return capitalize(answer1) + " beats " + answer2 + ', ' + hand1 + " wins!" 
// } else {
//   return capitalize(answer2) + " beats " + answer1 + ', ' + hand2 + " wins!"
// }

// let answer1 = answer1.toLowerCase().trim()
// let answer2 = answer2.toLowerCase().trim()

//   if (answer1 == answer2) {
//     return "It's a draw!"
//   } else if ( (answer1 === 'rock' && answer2 === 'scissors') ||
//               (answer1 === 'paper' && answer2 === 'rock') ||
//               (answer1 === 'scissors' && answer2 === 'paper') ) {
//     return capitalize(answer1) + " beats " + answer2 + ', ' + hand1 + " wins!" 
//   } else {
//     return capitalize(answer2) + " beats " + answer1 + ', ' + hand2 + " wins!"
//   }
