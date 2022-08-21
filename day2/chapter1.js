//1. create a varibale of type string and 
//try to add a variable to it

  let a = "Eima"
  let b = 14
  console.log(a+b);


//2. use typeof operators to find the datatype 
//of the string in last question

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(a+b));

//3.create a const object in js.
//can you change it to hold a number later?

const c ={
    name: "Eima",
    rollNo: 14,
    isMarried: false
}
// c = 22
//ans: we cannot change const to hold other data later

//4. try to add a new key to the const object in problem 3.
//were you able to do it?

c['interest'] = "Quantum Computing"
c['name'] = "Yibo"
console.log(c)

//5.write a js program to create a word-meaning dictionary 
//of five words

const dict ={
    quench: "satisfy (one's thirst) by drinking.",
    docker: "a person employed in a port to load and unload ships.",
    meliorism: "the doctrine that the world tends to become better or may be made better by human effort.",
    happy: "delighted, pleased, or glad, as over a particular thing",
    quantum: "a share or portion."
}
console.log(dict['docker'])
console.log(dict.quantum)