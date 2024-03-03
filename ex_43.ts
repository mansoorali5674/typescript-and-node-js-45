function show_magicians(magicians: string[]): void {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }

}
//const magician: string[] = ["Mansoor", "Ali", "Ahmed"];
//show_magicians(magician)

function make_great (magicians: string[]): void{
     for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[1] + "the great"
     }

}


const magician2: string[] = ["Mansoor",  "Ali",  "Ahmed"]

//make_great(magicians2)
//show_magicians(magicians2)

function make_great2(magicians: string[]):string[]{
    const greatMagicians: string[] = [];
    for(let i = 0; i < magicians.length; i++){
       greatMagicians.push(magicians[i] +" the great ");
    }
     return greatMagicians;
}


const magician3: string[] = ["Mansoor",   "Ali",    "Ahmed"];

const greatMagicians2: string[] = make_great2(magician3);
show_magicians(magician3)
show_magicians(greatMagicians2);

















