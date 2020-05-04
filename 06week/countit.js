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

const countButton = document.getElementById('countButton');

// submit string to count

countButton.addEventListener('click', function() {
  let textToCount = document.getElementById('toCount').value;
  console.log('clicked button')
  let displayText = countIt(textToCount);
  addText(displayText);
})

function countIt(textToCount) {
  let str = textToCount.replace(/[^a-z]/igm,"");
  console.log(textToCount);

  let result = str.split('').reduce((count, character) => {
    console.log("looking at character", character);
    count[character] = (count[character] || 0) + 1;
    return count;
    //document.getElementById("countText").innerHTML = count;
  },{})
  return result;
}

function addText(result) {
  //document.getElementById("countText").innerHTML += Object.keys(count) + Object.values(count);
  let sortedResult = Object.keys(result).sort().reduce((r, k) => (r[k] = result[k], r), {});
  Object.entries(sortedResult).forEach(([key,value, i]) => {
        document.getElementById("countText").innerHTML += `${key}: ${value} <br>`;
    });
  //document.getElementById("countText").style.whiteSpace = "pre-line";
}
  // reset button
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
  document.getElementById('toCount').value = '';
  document.getElementById("countText-1").innerHTML = '';
  document.getElementById("countText-2").innerHTML = '';
  console.log('cleared text');
})

// count = (`${count.key}: ${count.value}`);
 //displayCount = JSON.stringify(count)