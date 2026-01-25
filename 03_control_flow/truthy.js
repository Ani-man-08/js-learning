const userEmail = "aniket@gmail.com"
if(userEmail){
    console.log("Email verified")
}
//falsy values: false, 0, -0, BigInt On,""(empty string), null, undefined, NaN

//truthy values: true, "0", 'false'," ", [], {}, function(){} (empty function)

//*******************************/

//Nullish Coalescing Operator (??): null undefined
//It returns the right-hand value only when the left-hand value is null or undefined. Otherwise, it returns the left-hand value.
//It is used to assign default values without overriding valid falsy values like 0, false, or empty strings.

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1)

//*************** Ternary Operator *****************/
//condition ? truth : false

const iceTeaPrice = 100;
iceTeaPrice > 80 ? console.log(`more than 80`) : console.log(`less than 80`)