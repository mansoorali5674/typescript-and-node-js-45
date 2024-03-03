"use strict";
//Task 16
let guestarr = ["Alishba", "Haseeb", "Ali", "Hamza",];
let canNotAttendd = "Ali";
let newGues = "Wajahat";
guestarr[guestarr.indexOf(canNotAttendd)] = newGues;
console.log(guestarr);
//guestarr.map((items) =>
//console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
//)
//part 2
let guestBeg = "Muizz";
guestarr.unshift(guestBeg);
//part 3 Middle
let middleGuest = "Fatima";
let middleIndex = guestarr.length / 3;
guestarr.splice(middleIndex, 0, middleGuest);
console.log(guestarr);
//Part 4 append
guestarr.push("Fatima");
console.log(guestarr);
//Part 5
guestarr.map((items) => console.log(` Dear ${items}, you are invited in the more people list  on dinner`));
