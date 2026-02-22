const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function(acc,currValue){
//     console.log(`Accumulator: ${acc} | Current Value: ${currValue}`)
//     return acc + currValue;
// },0)

const myTotal = myNums.reduce((acc,currValue) => acc + currValue,0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Laptop",
        price: 30000
    },
    {
        itemName: "TV",
        price: 20000
    },
    {
        itemName: "WashingMAchine",
        price: 10000
    },
]

const cartTotal = shoppingCart.reduce((acc, currItem) => acc + currItem.price,0)
console.log(cartTotal)