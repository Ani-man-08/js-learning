// for of

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num)
}

const greeting = "Hello World"
for (const greet of greeting) {
    //console.log(greet)
}

//maps

const myMap = new Map();
myMap.set('IN',"India")
myMap.set('USA',"United States of America")
myMap.set('FR',"France")
myMap.set('IN',"India") // ------> map doesn't allow duplicate values

//console.log(myMap)

for (const [key, value] of myMap) {
    //console.log(key, ":-" ,value)
}


