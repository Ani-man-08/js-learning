//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i == 7){
        //console.log("Thala for a reason !!")
    }
    //console.log(element)
}
//console.log(element) // ----> cant access bcz out of scope

//***********************/

// Ex : 1
for(i = 0; i < 10; i++){
    //console.log(`Outer loop value: ${i}`);
    for(j = 0; j < 10; j++){
        //console.log(`Inner loop value: ${j} and inner loop ${i}`)
    }
}

// Ex : 2
for(i = 1; i <= 10; i++){
    //console.log(`Table of: ${i}`);
    for(j = 1; j <= 10; j++){
        //console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ["Naruto","JJK","Demon Slayer","vinland Saga"];
for(index = 0; index < myArray.length; index++){
    //console.log(myArray[index])
}

//break & continue

for(i = 1; i <= 10; i++){
    if(i == 5){
        console.log(`5 detected`)
       break;
    }
    console.log(i)
}

for(i = 1; i<= 10; i++){
    if(i == 5){
        console.log(`5 s detected`)
        continue;
    }
    console.log(i);
}}
