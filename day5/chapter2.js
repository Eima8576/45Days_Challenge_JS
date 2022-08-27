//chapter 2 practice set
//Q1. use logical operators to find whether the age of a person lies between 10 and 20

let age = prompt("Enter your age: ")
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age does not lie between 10 and 20")
}

//Q2. Demonstrate the use of Switch case statements in Javascript

let day = prompt("Enter the number: ")
day = Number.parseInt(day)
switch(date){
    case 1:
        console.log("Sunday, Fun day!");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
        
    case 5:
        console.log("Today is Thursday");
        break;
        
    case 6:
        console.log("Today is Friday");
        break;
        
    case 7:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid number!");             
}

//Q3.write a JS program to find whether a number is divisible by either 2 and 3

let n = prompt("Enter the number: ")
n = Number.parseInt(n)
if(n%2 == 0 && n%3 == 0){
    console.log("The number is divisible by 2 and 3")
}
else{
    console.log("The number is not divisible by 2 and 3")
}

//Q4. Print "You can Drive or You cannot Drive" based on age being greater than 18
//using ternary operator

let age = prompt("Enter your age:")
age = Number.parseInt(age)
age>18? console.log("You can drive"): console.log("You cannot Drive");