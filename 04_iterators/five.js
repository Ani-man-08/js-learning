// forEach loop
const heros = ["Iron Man","Black panther","Thor","Black Widow"]

// heros.forEach(function (value){      //---> this is a callback fu. that's why it doesnt have name
//     console.log(value.toUpperCase())
// })

// *****************************/

// heros.forEach((value) => {
//     console.log(value.toUpperCase())
// })

//******************************/

// function printMe(value) {
// console.log(value);
// }

// heros.forEach(printMe) // ------> just give reference of fn. don't execute it

//********************************/

// heros.forEach( (item, index, arr)=>{
//     console.log(item, index, arr)
// })

//************ iterating Object in an array **************/

const myArr = [
    {
        state: "Maharashtra",
        language: "Marathi"
    },
    {
        state: "Gujrat",
        language: "Gujrati"
    },
    {
        state: "Madhya Pradesh",
        language: "Hindi"
    }
]

myArr.forEach( (item) => {
    console.log(item.language);
})