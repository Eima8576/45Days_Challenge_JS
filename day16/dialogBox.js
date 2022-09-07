// //alert box prompt and confirm box
// alert("Hello enter your name")
// let name = prompt("Enter your name here")
// document.write(name)
// alert("You entered your name and it is of type " + (typeof name))
// name = Number.parseInt(name)
// alert("Now your name is converted into " + typeof(name))

alert("Enter a number")
let a = prompt("Enter the number here ", "123...")
let write = confirm("Write it to the page?")
if(write){
    document.write("The number you have entered is ", a)
}
else{
    document.write("Please allow to write")
}