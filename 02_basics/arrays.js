const num = [0,1,2,3,4,5,6]
// console.log(num[2]);

const myArray = new Array("Ani",1,2,3)          // different types of dataTypes are allowd in array in js
// console.log(myArray)

myArray.push("Gaurav")                            
// console.log(myArray)                            //add at end

num.pop()                                       //remove from end
// console.log(num)

// console.log(num.includes(2))                    //answer is in bollean dType 

const newArray = num.join()                     // .join convert to String
// console.log(newArray)
// console.log(typeof newArray)

//slice,splice

// console.log("A: ", num)

const myn1 = num.slice(0,3)
// console.log(myn1)
// console.log("B: ", num)

const myn2 = num.splice(0,3)
// console.log(myn2)
// console.log("C: ", num)

// console.log(num.length)

//merging of arrays

const miIpl = ["Rohit","Hardik","Bumrah"]
const cskIpl = ["Dhoni","Jadeja","Dube"]

// miIpl.push(cskIpl)
//console.log(miIpl)

// const IndTeam = miIpl.concat(cskIpl)
// console.log(IndTeam)

const newIndTeam = [...miIpl,...cskIpl]        //spread operator
console.log(newIndTeam)

const anotherArray = [0,1,2,3,[4,5,6],[7,8,[10,11],9]]
const my_anotherArray = anotherArray.flat(Infinity)
console.log(my_anotherArray)