if(true){
    let a = 10;
    const b = 20;
    console.log(a);
}
//console.log(a); -----------> global scobe can't access block scope.

function one(){
    const userName = "Aniruddha";
   
    function two(){
        const age = 21;
        console.log(userName);
    }
    //console.log(age);

    two();
}
one();


//********************************/

if(true){
    const userName = "Aniruddha";
    if(userName === "Aniruddha"){
        const website = " Youtube";
        console.log(userName + website)
    }
    //console.log(website) // ---------->error(out of scope)
}
//console.log(userName) // ------------->error(out of scope)

//***************** interesting ******************/

console.log(addOne(5));// -------------->no problem
function addOne(num){
    return num + 1;
}

//++++++++++++++++++++++++//
//addTwo(5); -----------------> error,bcz of the way function is made
const addTwo = function(num){
    return num + 1;
}

