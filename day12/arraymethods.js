//methods in array
let num = [1, 4, 5, 90,44]
let a = num.toString();
console.log(a)
//join()
let b = num.join("+")
console.log(b) 
console.log(typeof b)
//pop(): changes the same array
let r = num.pop()// returns the poped element
console.log(num,r)
num.push(55)   //returns new array length
console.log(num)
//shift  removes an element from the start of an array
let ret = num.shift()
console.log(num, ret)
//ushift adds an element to the beginning of the array
let re = num.unshift(23)
console.log(num, re)

//more array methods
let arr = [0,1,2,5,8,9,6]
delete arr[0]//deletes array but length is not changed
console.log(arr)
//concat 
let arr2 = [1,45,66,77,83,22,14]

let newArray = arr.concat(arr2)
console.log(newArray)

//sort method changes original array and sorts in alphabetical order
arr.sort();
console.log(arr)
console.log(newArray)

let compare = (a,b)=>{
    return a - b
}
//sorting in ascending order
newArray.sort(compare)
console.log(newArray)

//reverse 
newArray.reverse()
console.log(newArray)

//splice and slice 
//splice can be used to add new items to an array
 let number = [4,5,6,7,8,9,3,2]
 number.splice(3,2,101,103,104)  // 3 start from index 3, replace 2 index with 101,103
 //104 and then again continue from 9, 3, 2
 console.log(number)

// slice out a piece from an array

let newNum = number.slice(4,6)
console.log(newNum)
