//for of in Objects:

const myObj = {
    IN:"India",
    USA:"United States of America",
    FR:"France",
    IN:"India"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}