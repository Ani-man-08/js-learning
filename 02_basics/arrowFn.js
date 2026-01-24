const user = {
    userName: "Aniruddha",
    age: 21,

    welcomeMessage: function(){
        console.log(`Welcome ${this.userName}, to your setup.`);
        console.log(this);
    }
}

user.welcomeMessage();
user.userName = "Sam";
user.welcomeMessage();

//console.log(this); 

//*************** Arrow Function ******************/

const user1 = () => {
    let userName = "Aniket";
    console.log(userName);
}
user1();
//*****************************/

// const user2 = (num1, num2) => {
//     return num1 + num2;
// }

//const user2 = (num1, num2) => num1 + num2;

const user2 = (num1, num2) => (num1 + num2);

//const user2 = (num1, num2) => ({user: "Toji"}); ---------> object

console.log(user2(5,7));

//Immediately Invoked Function Expressions (IIEF)
// (function)()

(function chai(){
    //named IIFE
    console.log(`DB CONNECTION`);
})();

((name) => {
    //unnamed IIFE
    console.log(`DB CONNECTION ${name}`);
})("Aniruddha");
