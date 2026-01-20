const num = [1,2,3,4,5,6]
console.log(num[2]);

const myArray = new Array("Ani",1,2,3)          // different types of dataTypes are allowd in array in js
console.log(myArray)

myArray.push("Gaurav")                            
console.log(myArray)                            //add at end

num.pop()                                       //remove from end
console.log(num)

console.log(num.includes(2))                    //answer is in bollean dType 

const newArray = num.join()                     // .join convert to String
console.log(newArray)
console.log(typeof newArray)


