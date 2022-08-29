//chapter 3 practice questions
//Q1. WAP to print the marks of a student in an object using 
//for loop

let marks = {
    eima: 80,
    bibu: 95,
    dipen: 81,
    Allare: 2
}

for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//Question no 2: using for in loop
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key]);
}

//Q3. WAP to pring "try again" until the user enters correct number

// let n = 9
// let i 
// while (i != n){
//     i = promt("Enter a number")
//     console.log("Try Again!!!")
// }
// console.log("You have entered a correct number")

//Q4. Write a function to find the mean of 5 numbers

const mean = (a, b, c, d, e)=>{
    return(a+b+c+d+e)/5
}
console.log(mean(6,2,3,8,7))