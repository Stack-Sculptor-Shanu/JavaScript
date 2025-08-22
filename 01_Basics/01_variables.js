const accountId = 14453
let accountEmail = 'example@gmail.com'
var accountPassword = 12345
accountCity = 'Patna'

// accountId = 2 //not allowed
accountEmail = 'ak@gmail.com'
accountPassword = 'shaf124'
accountCity = 'jaipur'
console.log(accountId)

/*
Preferred not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])