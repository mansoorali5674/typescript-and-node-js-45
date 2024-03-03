"use strict";
//Task 15
let guestarray = ["mehak", "Mansoor", "Ali", "Haseeb",];
let canNotAttend = "mehak";
//console.log(canNotAttend  + " "   "can not attend the dinner." )
let newGuest = "Muzamil";
guestarray[guestarray.indexOf(canNotAttend)] = newGuest;
//console.log(guestarray)
guestarray.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
