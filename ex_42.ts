function show_magicians(magicians: string[]): void {
      for (const magician of magicians){
         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
      }
   }
   
   
//    const magicians: string[] = ["ali", "hamza","bilal"];
//    show_magicians(magician)
   


   function make(magicians: string[]): void {
      for (let i = 0; i < magicians.length; i++){
            magicians[i] = magicians[i]   +  " the great "
      }
   }

   const magicians2: string[] = [" ali ",  " hamza ",  " bilal "];
   make(magicians2)
   show_magicians(magicians2)