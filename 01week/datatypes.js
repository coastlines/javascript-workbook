// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
//console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const numToString = () => {
  let num = 3
  let myString = num.toString() + 0
  document.getElementById("numToStringText").innerHTML = num + ' is a '.bold() + (typeof num).bold() + ' and '.italics() + myString + ' is a '.bold() +(typeof myString).bold();
}

// Write a JavaScript program to convert a string to the number.
const stringToNum = () => {
  let myString = '3'
  let num = Number(myString)
  num = num + 27
  document.getElementById("stringToNumText").innerHTML = myString + ' is a '.bold() + (typeof myString).bold() + ' and '.italics() + num + ' is a '.bold() +(typeof num).bold();
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const whatDataType = () => {
  let b = typeof(false)
  let n = typeof(null)
  let u = typeof(undefined)
  let nu = typeof(16)
  let na = typeof(0/0)
  let s = typeof('string')
  document.getElementById("whatDataTypeText").innerHTML = '<ul> <li> false = ' + b + '</li> <li> null = ' + n + '</li> <li> undefined = '
  + u + '</li> <li> number = ' + nu + '</li> <li> nAn = ' + na + '</li> <li> string = ' + s + '</ul';
}

// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = (num1, num2) => { 
  num1 = document.getElementById("num1").value
  num2 = document.getElementById("num2").value
  sum = +num1 + +num2
  document.getElementById("addTwoNumbersText").innerHTML = 'The sum of your numbers is ' + sum;
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const ifEitherTrue = (obj) => {
  let colors = ["sandybrown", "rosybrown", "plum", "seagreen", "springgreen"]
  obj.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    if (obj.style.backgroundColor === "seagreen" || obj.style.backgroundColor === "springgreen" ) {
      obj.innerHTML = 'green'
    }
    else {
    obj.innerHTML = 'not green'
    }
}

// Write a JavaScript program that runs only when 2 things are true.
const ifBothTrue = (obj) => {
  let colors = ["plum", "seagreen"]
  let textColors = ["salmon", "white"]
  obj.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  obj.style.color = textColors[Math.floor(Math.random() * textColors.length)];
    if (obj.style.backgroundColor === "seagreen" && obj.style.color === "salmon" ) {
      obj.innerHTML = 'yes'
    }
    else {
      obj.innerHTML = 'no'
    }
}

// Write a JavaScript program that runs when both things are not true.
const ifBothFalse = () => {
  if ( 10 < 5 && 1 > 20) {
   document.getElementById("ifBothFalseText").innerHTML = 'true statements'
  } 
  else {
    document.getElementById("ifBothFalseText").innerHTML = ' 10 < 5 <br> 1 > 20'
  }
}