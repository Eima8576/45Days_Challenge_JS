//loops in js
//for loop
let sum = 0
let n = prompt("Enter the value of n")
n=Number.parseInt
for(let i =0; i<n; i++){
    sum += (i+1)
}
console.log("Sum of first " + n + "natural numbers is " +sum)

//for in loop (if we need just keys)

let obj = {
    eima: 78,
    bibhu: 90,
    dipen: 75
}
for(let a in obj){
    console.log("Marks of "+a+ " are " +obj[a])
}

//for of loop
let obj = {
        eima: 78,
        bibhu: 90,
        dipen: 75
}
for(let a of "eima"){
    console.log(a)
}
    
//while loop
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
while(i<n){
    console.log("Happy Father's Day!")
    i++;
}

let i = 0;
do{
    console.log("Happy Father's Day!")
    i++;
}while(i<3);
