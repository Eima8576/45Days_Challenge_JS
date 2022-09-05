//chapter 5 practice questions on js
/* Q1. create an array of numbers ans take inputs 
from the user to add numbers to this array*/
let arr = [1, 2, 6,7,90]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

//Q2. keep adding numbers to Q1 until 0 is pressed

let arr = [1, 2, 6,7,90]
let a;
do {
a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
}while(a != 0)
console.log(arr)

//Q3. filter for numbers divisible by 10 from a given array

let array = [1,20,45,90,10,44,70]
array.filter((x)=>{
    return x%10 == 0
})
console.log(array)

//Q4 create an arrary of sq of given numbers
let arr = [1,20,45,90,10,44,70]
arr.map((x)=>{
    return x*x
})
console.log(arr)

/*Q4. use reduce to calculate factorial of a given numbers from an array
of first n natural numbers*/
let arr2 = [1,2,3,4,5,6,7]
let n = arr.reduce((x,y) => {
    return x*y
})
console.log(n)
