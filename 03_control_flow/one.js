const temperature = 41;

if(temperature < 50){                  // <, >, =>, =<, ==, !=, !==, === (also checks the dataType)
    console.log("executed");
}
console.log("Temperature is greater than 50");

//**************************************/

if(temperature === 40){
    console.log("less than 50")
}
else{
    console.log("Temperature is greater than 50")
}

//***************************************/

const score = 200;

if(score > 100) console.log(`Use power`); // implicit scope (use just for single console.log())

//***************************************/

const balance = 1000;
if(balance < 500){
    console.log(`balance is less than 500`);
}
else if(balance < 750){
    console.log(`balance is less than 750`)
}
else if(balance < 900){
    console.log(`balance is less than 900`)
}
else{
    console.log(`balance is = to 1200`)
}

//******************************/

const isLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isLoggedIn && debitCard){           // both must be true
    console.log(`allow to buy`)
}

if(loggedInFromGoogle || loggedInFromEmail){  // atleast one should be true.
    console.log(`user loggedIn`)
}
