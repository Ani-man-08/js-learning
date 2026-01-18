const score = 500
console.log(score);

const balance = new Number(200)
console.log(balance)

console.log(balance.toString.length)
console.log(balance.toFixed(2))

const amount = 2233413;
console.log(amount.toPrecision(5))
console.log(amount.toLocaleString())

//+++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(4.3))
console.log(Math.ceil(6.1))
console.log(Math.floor(6.7))
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))

console.log(Math.random())
console.log((Math.random()*10) + 1) // by adding +1 we confirm that the value should never be '0'
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);