function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("D");
    console.log("H");
    console.log("A");
}
//sayMyName;---------->reference
//sayMyName(); //------->execution

//******************** functions with parameters **********************/
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
//addTwoNumbers(3,5);

function addTwoNumbers(num1, num2){
    const result = num1 + num2;         // using return keyword
    return result;
    // return num1 + num2;
}
const result1 = addTwoNumbers(3,5);

//console.log("Result: ", result1)

//********************************************/
function isLoggedIn(username){
    // if(username === undefined){
    if(!username){
        return `Please enter username`;
    }
    return `${username} is logged in.`
}
// console.log(isLoggedIn("Aniruddha"))
//console.log(isLoggedIn());

//**********************************/
function isSignIn(username = "sam"){       // if nothing passes in argument then atleast "sam" will be written
    return `${username} is logged in.`     // and is something passes then it overwrites "sam" 
}
// console.log(isLoggedIn("Aniruddha"))
//console.log(isSignIn());


//************** Rest Operator *******************/

function toCalculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(toCalculateCartPrice(100,200,500,2000,32,1321))

//**********************************/
user = {
    userName: "Aniruddha",
    age: "21"
}
function handleObject(anyObject){
    return console.log(`My name is ${anyObject.userName} and age is ${anyObject.age}`);
}

//handleObject(user);
handleObject({
    userName:"Sam",
    age: 19
})

//*******************************/
const myArray = [12,23,34,45,67];

function returnSecondArray(getArray){
return getArray[1];
}
console.log(returnSecondArray(myArray));
