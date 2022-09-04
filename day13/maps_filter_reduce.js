//map, filter and reduce
//map() created a new array by performing same operation on each array 
let arr = [12, 56, 77]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(a)

//array filter method; filters an array with values that passes test
let arr2 = [12,35,66,77,1,3,90]
let b1 = arr2.filter((b)=>{
    return b>20
})
console.log(b1)
console.log(arr2) //original arr is not changed

//reduce method in array; reduce an array to a single value

let arr3 = [45,23,14,15,19]
let red = arr3.reduce((x,y)=>{
    return x+y 
})
console.log(red)
