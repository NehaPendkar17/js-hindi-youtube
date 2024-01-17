const accountId = 144553
let accountEmail = "neha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 //not allowed
 
accountEmail = "ng@ng.com"
accountPassword = "4444"
accountCity = "delhi"
console.log(accountId);
 /*
 prefer not to use var
 because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
