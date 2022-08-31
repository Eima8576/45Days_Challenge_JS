//Chapter 4- Practice set
console.log("She\'s here".length)

//q2. explore the includes starts with and ends with

const sentence = "What you aim determines what you see"
const word = "aim";
const start ="What";
const end ="determines"
console.log(`The word "${word}" ${sentence.includes(word) ? "It is" : "It is not"} in the sentence`)
console.log(`The sentence starts with "${start}" ? Ans: ${sentence.startsWith(start) ? "It is" : "It is not"} true`)
console.log(`The sentence ends with "${end}" ? Ans: ${sentence.endsWith(end) ? "It is" : "It is not"} true`)
//.includes(), startsWith() and endsWith() returns true or false


//Q3. Convert the string to lowercase
console.log(start.toLowerCase())

//Q4.Extract the number from the given sentence
let str2 = "My Roll no is 76031412"
let amount = Number.parseInt(str2.slice("My Roll no is".length))
console.log(amount)
console.log(typeof(amount))

//Q5. Try to change the fourth char of a given string
//were you able to change it?
let str = "Terminal"
str[3] = "O"
console.log(str)
//the str is not changed because string is immutable