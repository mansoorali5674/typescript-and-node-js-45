"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//const magician: string[] = ["Mansoor", "Ali", "Ahmed"];
//show_magicians(magician)
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[1] + "the great";
    }
}
const magician2 = ["Mansoor", "Ali", "Ahmed"];
//make_great(magicians2)
//show_magicians(magicians2)
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the great ");
    }
    return greatMagicians;
}
const magician3 = ["Mansoor", "Ali", "Ahmed"];
const greatMagicians2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatMagicians2);
