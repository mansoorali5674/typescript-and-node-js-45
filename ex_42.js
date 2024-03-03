function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//    const magicians: string[] = ["ali", "hamza","bilal"];
//    show_magicians(magician)
function make(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great ";
    }
}
var magicians2 = [" ali ", " hamza ", " bilal "];
make(magicians2);
show_magicians(magicians2);
