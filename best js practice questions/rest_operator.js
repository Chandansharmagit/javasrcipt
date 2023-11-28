//function with multiple arguments most know to do rest operator method

//making the rest operator
function sharma(name,...args){//... that is the rest operator
    console.log(`the sum is ${name}`)
    //making the for in loop
    let sum = 0;
    for(let i in args){
        sum += args[i]
    }
    console.log(sum + " <br> ")
}
// sharma("chandan sharma",50,40);

//making the another rest operator 

function names(name,...args){//making the spread operator
    console.log(name)

    //lets calculate the addition of the number
    let sum = 0;
    for (const i in args) {
        sum += args[i]
    }
    console.log( "the sum is " + sum)
}
names("chandan sharma",50,20)


