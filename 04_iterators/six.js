//const coding = ["js","java","python","ruby"]

// const value = coding.forEach((item) => { ---------------> forEach doesn't give/return any value
//     //console.log(item)
//     return item
// })
// console.log(value);

//************ filters ***********

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// //const newNums = myNums.filter((num)=> num > 5)
// const newNums = myNums.filter((num)=> {
//     return num > 5                       //------------> while writing curly bracket in fn. it is compulsry to use 'return' keyword
// })
// //console.log(newNums);

const books = [
    {title: "Book one", genre: "Non-fiction", publish: 1967, edition: 1990},
    {title: "Book two", genre: "Fiction", publish: 1980, edition: 1990},
    {title: "Book three", genre: "Non-fiction", publish: 1999, edition: 2003},
    {title: "Book four", genre: "History", publish: 1986, edition: 1996},
    {title: "Book five", genre: "Novel", publish: 1980, edition: 1984},
    {title: "Book six", genre: "Non-fiction", publish: 1978, edition: 1995},
    {title: "Book seven", genre: "Fiction", publish: 2002, edition: 2010},
    {title: "Book eight", genre: "History", publish: 2001, edition: 2004},
    {title: "Book nine", genre: "Fiction", publish: 1998, edition: 1999},
    {title: "Book ten", genre: "Novel", publish: 1989, edition: 1993},
];

let userBooks = books.filter( (bk) => bk.genre === "Non-fiction")

userBooks = books.filter( (bk) => { return bk.publish > 2000 })

userBooks = books.filter( (bk) => {
    return bk.publish > 1960 && bk.genre === "Non-fiction"
 })
console.log(userBooks);
