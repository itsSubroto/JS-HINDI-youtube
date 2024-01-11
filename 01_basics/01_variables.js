const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountcity= "Jaipur"
let accountState;

// accountId=2 // not allowed
accountEmail="hc@hc.com"
accountPassword="2121212121"
accountcity="Banaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity,accountState])

/* 
Prefer not to use var
beacause of issue in block scope and functional scipe

*/