const mySum = Symbol("Key1")

const jsUser = {
    name: "Aniruddha",
    "My address": "Nagpur",                //we can access this type with only [ ].
    [mySum]: "myKey1",
    age: 21,
    email: "aniruddha@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Tuesday"]
}

// console.log(jsUser.age)

// console.log(jsUser.name)
// console.log(jsUser["name"])

// //console.log(jsUser.My address)   //error
// console.log(jsUser["My address"])

console.log(jsUser[mySum])

jsUser.email = "aniket@gmail.com";           //update values with using '='
//Object.freeze(jsUser);                       //Object doesn't change further
jsUser.email = "Kartik@gmail.com";

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello User")
};

jsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

