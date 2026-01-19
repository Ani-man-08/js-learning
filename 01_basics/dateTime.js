const myDates = new Date();

console.log(myDates)
console.log(myDates.toString())
console.log(myDates.toDateString())
console.log(myDates.toLocaleString())
console.log(typeof myDates)

//const myNewDate = new Date(2026,0,19)
const myNewDate = new Date(2026,0,19,5,3)
console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000))
