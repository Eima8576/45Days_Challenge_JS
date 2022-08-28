//functions in JavaScript

function avgOfNumbers(x, y) {
    return(x + y)/2
}

let a = 8
let b = 12
let c = 17

console.log("The average of a and b is", avgOfNumbers(a,b));
console.log("The average of b and c is", avgOfNumbers(b,c));
console.log("The average of a and c is", avgOfNumbers(a,c));

const sum = (m, n)=>{
    return m*n;
}
console.log("The product of m and n is", sum(9,15))

const challenge = ()=>{
    console.log("Hey! This is day seven of 45 days CLG challenge of learning Javascript")
}

challenge();