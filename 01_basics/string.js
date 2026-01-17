const sName = "Aniruddha"
let age = 21;

console.log("My name is " + sName +" and my age is "+ age); // old way (not recommended)

console.log(`My name is ${sName} and my age is ${age}`);  // modern simple way.we can use methods on 'sName' and 'age' also within here (use this only)

const gameName = new String("Aniruddha"); //another way to maek String

console.log(gameName[0])
console.log(gameName.charAt(4))
console.log(gameName.indexOf('r'))


console.log(gameName.substring(0,5))
console.log(gameName.slice(-3,5))

const newString = "       Anie   ";
console.log(newString.trim())

const url = "https//aniruddha/20%discount.com";
console.log(url.replace('20%', '-'))

const splitString = "Hello my Name is Aniruddha"
console.log(splitString.split(" "))