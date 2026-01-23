//singlton   or create using with the help of constructor

const tinder = new Object();

tinder.name = "Aniruddha";
tinder.age = 21;
tinder.email = "ani@gmail.com";

//console.log(tinder);

const user = {
    oldUser:{
        newUser:{
            firstName:"Aniket",
            lastName:"Mankar"
        }
    }
}

// console.log(user);
// console.log(user.oldUser.newUser);

//*********** Addition of two or more objects ****************
const a1 = {a:1, b:2};
const a2 = {c:3, d:4};
const a3 = {e:5, f:6};

const a4 =  Object.assign({},a1,a2,a3); 
//console.log(a4)

const a5 = {...a1,...a2,...a3}      //by using spread operator
//console.log(a5)

//***** keys,Values *******/
// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

//********** value present or not **********/
//console.log(tinder.hasOwnProperty('name'));

//************** Object De-structuring ****************/

const course = {
    courseName:" js in Hindi",
    fees: 999,
    courseDuration: "six months"
}

console.log(course.courseDuration) //----------> very common

const {courseDuration} = course //------->by doing this we dont need to write 'course.courseDuration' 
console.log(courseDuration)     //        again & again if we need it multiple times

const {courseDuration: duration} = course //----------> we assign 'courseDuration' as 'duration'
console.log(duration)