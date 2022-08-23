//conditional statement in JavaScript
let a = prompt("How old are you?");
a = Number.parseInt(a);
console.log(typeof a);
if(a>0){
    alert("This is a valid age");
}
else{
    alert("This is an invalid age");
}

//if...else if
if(age>0){
    console.log("A valid age");
}
else if(age > 10 && age <15){
    console.log("but you are a kid");
}
else if(age>18){
    console.log("not a kid");
}
else{
    console.log("Invalid age!");
}

//ternary operators

console.log("You are", a<20? "not eligible to marry": "eligible to marry");