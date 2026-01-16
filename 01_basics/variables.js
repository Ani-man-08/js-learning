const accountId = 1453
let accountEmail = "mankar@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "am@gmail.com"
accountPassword = "345345"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])