//loops in array
let num = [5,6,88,22,45]
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }

////foreach loop
// num.forEach((element) => {
//     console.log(element*element)
// })

//array from used to create an array form any other object
let name = "Eima"
let arr = Array.from(name)
console.log(arr)

//for...of //short form of for loop
for (let i of num){
    console.log(i)
}
 
//for in returns keys of array
for(let i in num){
    console.log(i)
    console.log(num[i])
}


