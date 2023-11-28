//classes and objects

// class hello {
//     sharma(name) {
//         console.log(name) ;
//     }
//     man(fname){
//         console.log(fname)
//     }
    
// }
// let a = new hello();

// a.sharma("chadnan")
// a.man("chandan")



class makes{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
        console.log("constructor function")
    }

    //making the another function to pass the value of constructor
    
    making(){
        console.log(`the first name is ${this.fname} and the lastname of the user is ${this.lname}`)
    }

}

//to access the class you most declare the objects of the class

let newmakes = new makes();
newmakes.fname = "chandan";
newmakes.lname = "sharma";

console.log(newmakes.name)
newmakes.making();