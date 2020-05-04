// CONSOLE VERSION
// let string = ` a sammple string 345 na7not a word 
// ok 

//     siiping space`;


// function countIt(input) {
//   let str = input.replace(/[^a-z]/igm,"");

//   str.split('').reduce((count, character) => {
//     console.log("looking at character", character);
//     count[character] = (count[character] || 0) + 1;
//     return count;
//   }, {});
// }

//WEB VERSION

// submit string to count
const countButton = document.getElementById('countButton');

countButton.addEventListener('click', function() {
  let textToCount = document.getElementById('toCount').value;
  let displayText = countIt(textToCount);
  addText(displayText);
})

// count number of appearances of each character after removing white spaces and non-alphabetic characters
function countIt(textToCount) {
  let str = textToCount.replace(/[^a-z]/igm,"");
  let result = str.split('').reduce((count, character) => {
    count[character] = (count[character] || 0) + 1;
    return count;
  },{})
  return result;
}

// sort results alphabetically and create text to display
function addText(result) {
  let sortedResult = Object.keys(result).sort().reduce((r, k) => (r[k] = result[k], r), {});
  Object.entries(sortedResult).forEach(([key,value]) => {
      document.getElementById("countText").innerHTML += `${key}: ${value} <br>`;
    });
}

// reset button
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
  document.getElementById('toCount').value = '';
  document.getElementById('countText').innerHTML = '';
})