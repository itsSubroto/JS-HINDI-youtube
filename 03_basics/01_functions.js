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
//    console.log("hitesh");  //unreachable code... return statement er niche code likhle seta execute hoy na... ai line tai jodi retune er upore niyaa jaoya hoi tahola ota exectue hoba and output asbe.

   return number1 + number2;  // We can directly write insted of declaring a variable and assinging the value to the variable and then return it

}

const result = addTwoNumbers(3, 5)  // above is the declaration and defination of the funtion and this is calling the funtion

// console.log("Result: ",result);



function loginUserMessage(username){
    if(username === undefined){   // if(!userdefined)  => both are same
        console.log("Plase enter a user name");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());




// +++++++++++ In next lecture of funtion ++++++++++++++++++


// function calculateCartPrice(num1) 

function calculateCartPrice(...num1){  //=> ... is rest or sprade operator. Rest means sob value ke array te returne kore daye
  return num1
}

// console.log(calculateCartPrice(2));  // it is okay but jokhon ecommerce website a cart section aa onek item add hote thake tokhon jinista taugh hoye jai
// console.log(calculateCartPrice(200, 400, 500, 2000));  // ekhane kebol 200 takai output kora hoye


// ++++ using object in funtion

const user ={
  username: "hitesh",
  price: 199
}

function handelObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handelObject(user)  //=> calling the function arguments as object. It is compalsury.

handelObject({   //=> jodi object agge theke define kora na thake tahole .. ekhaneo define kora jai. But argumetns hisabe korte hoba. Means () braket er vetore {} curli braket chalu kore object er elements deckare kora jabe
  username: "sam",
  price: 399
})


// +++++++++++ array in function +++++++++

const myNewArray = [200, 400, 100, 600]  //declaring the array

function returneSecondValue(getArray){
  return getArray[1]  // ekhane array er name main array er name ta dile hobe na .. ekhane function er parameter aa je array name use hoyeche sai array er name ta dite hobe
}

console.log(returneSecondValue(myNewArray));
console.log(returneSecondValue([200, 400, 500, 600]));  //both are same 
