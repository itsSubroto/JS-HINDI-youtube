// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

// funtion making
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()


// parameters :- addTwoNumbers(number1, number2) , number1 & number2 are the parameters. Those variables who are use while declaring th funtion those variables are called parameters.
// Arguments :- addTwoNumbers(3, null) , here 3 & null are the arguments. Those variables who are declared while calling the funtion. those variables are Arguments.

// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2); 

// }


function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
//    console.log("hitesh");  //unreachable code... return statement er niche code likhle seta execute hoy na... ai line tai jodi retune er upore niyaa jaoya hoi tahola ota exectue hoba.

   return number1 + number2;

}

const result = addTwoNumbers(3, 5)

// console.log("Result: ",result);



function loginUserMessage(username){
    if(username === undefined){   // if(!userdefined)  => both are same
        console.log("Plase enter a user name");
        return
    }
    return `${username} just logged in`
}


console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
