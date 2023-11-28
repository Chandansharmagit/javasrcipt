//making the object literals

let namse = "chandansharma";

//making the objects
var names = {
    [namse+"stud"] : "chandan sharma chandan",
    courses: "computer science",
    details(){
        return `${this.chandansharmastud} and the courses is ${this.courses}`
    }

}

console.log(names) 
console.log(names.details())