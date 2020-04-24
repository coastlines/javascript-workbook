'use strict';

const countTo1000 = () => {
  let result = "";
  let count = 0;

  do {
    console.log(count);
    count++;
  } while (count < 1001);
  
  }

countTo1000();

//Create an object (an array with keys and values) called person with the following data

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
   }

//Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

const ifBirthYearOdd = () => {
  let dobArray = person.birthDate.split(' ');
  let dob;
  let year;

  for (year in dobArray) {
    if (dobArray%2 !== 0) { 
      dob = true;
      } 
    }

  if (dob === true) {
  console.log("Odd birth year:" + person.birthDate)
  }
  
}
ifBirthYearOdd(person);


const arrayOfPersons = [];

const hermione = {
  firstName: "Hermione",
  lastName: "Granger",
  birthDate: "Jan 5, 1925",
  gender: "female"
 }

const harry = {
  firstName: "Harry",
  lastName: "Potter",
  birthDate: "Feb 28, 1924",
  gender: "male"
 }

const ron = {
  firstName: "Ron",
  lastName: "Weasley",
  birthDate: "Nov 20, 1999",
  gender: "male"
 }

arrayOfPersons.push(hermione);
arrayOfPersons.push(harry);
arrayOfPersons.push(ron);
console.log("*****Array of Objects*****", arrayOfPersons);

//Use .map() to map over the arrayOfPersons and console.log() their information.
const mapOfPersons = arrayOfPersons.map((friend) => (
  [friend.firstName,friend.lastName, friend.birthDate, friend.gender]));

console.log("*****Map*****", mapOfPersons);

//Use .filter() to filter the persons array and console.log only males in the array.
const filterOfPersons = arrayOfPersons.filter(person => person.gender == "male")

console.log("*****Gender Filter*****", filterOfPersons)

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const filterOfPersonsDOB = arrayOfPersons.filter(function (d) {
  return Date.parse(d.birthDate) < Date.parse('Jan 1, 1990');
})

console.log("*****Date Filter*****", filterOfPersonsDOB);
