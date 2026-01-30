const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function(acc,currValue){
    return acc + currValue
})
console.log(myTotal)