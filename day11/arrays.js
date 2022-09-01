//arrays in js
let marks_5thsem= [41,22,54,77,98, null]
console.log(marks_5thsem[0])
console.log(marks_5thsem[1])
console.log(marks_5thsem[3])
console.log(marks_5thsem[5])
console.log(marks_5thsem[6])// will be undefined
console.log("The length of marks_5thsem is",marks_5thsem.length)
marks_5thsem[6] = 88 //adding a new value to the array
marks_5thsem [1] = 44 // changing the values of an array
console.log(marks_5thsem)
console.log(typeof marks_5thsem)

//quiz: print the elements of array using for loop
for(let i = 0; i< marks_5thsem.length; i++){
    console.log("The marks of sutdent " + (i+1) +  " of fifth sem is " + marks_5thsem[i]);
}
