// //making the spread operator 
// function sharma(name,...args){
//     console.log(arguments)
//     console.log(`the sum is ${name}`);
//     //making the spread opearotor
//     let sum = 0;
//     for(let i in args){
//         sum += args[i]
//     }
//     console.log(sum + " <br> ")
//     //making the arrow function

// } 
// var arr = [20,40,40]
// //calling the function and passing the constructor value
// sharma("chandan sharma",...arr)//... this spread opeator makes output 100


// // another questing practise
const arr = [30, 50, 60, 70];

const arr1 = [50, 30]

// const arr3 = arr.concat(arr1);
//spread concatination
var arr3 = [...arr, ...arr1]
arr.push(40);


console.log(...arr3)

//making the another function to calculate the sum in the spread operator

function chandansharma(name, ...args) {
    console.log(name)

    //adding the value to its sum value
    let sum = 0;
    for (const i in args) {
        sum += args[i]

    }
    console.log(sum)
}
//calling the function with their name 
chandansharma("chandan sharma", 30, 80, 90);




//making the spread opeartor with the javascript 

function names(name, ...args) {
    console.log("chandan sharma class 12  ")


    //making the subtraction with using the spread and rest operator

    let sum = 0;
    for (const i in args) {
        sum += args[i];
    }
    console.log(sum)
}

//giving the constuctoe value

names("chandan",30,20)