"use strict";
const personName = "Mansoor Ahmed";
//lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//titalcase
let firstLetter = personName.charAt(0).toUpperCase();
let restLetter = personName.slice(1).toLowerCase();
let titalCase = firstLetter + restLetter;
console.log(titalCase);
