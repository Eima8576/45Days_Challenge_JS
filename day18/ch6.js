//Practice set from ch 6
//Q1, 2,3
const drive =(age)=>{
    return age >= 18 ? true : flase;
 }
let runAgain = true;
while(runAgain){
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age<0){
        console.error("Please enter a valid age");
        break;
    }
    if(drive(age)){
    alert("You can drive");
    }
    else{
    alert("You cannot drive!");19
    }
    runAgain = confirm("Do you want to run again?")
}

//Q4. 
let number = prompt("Enter your number")
number = Number.parseInt(number)
if(number > 4){
    location.href = "https://askmitra.com/clg"
}
//Q5
let color = prompt("Enter the page background color")
document.body.style.background = color
