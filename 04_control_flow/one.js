//if
// if (condition){

// }

// if(true){

// }

// if(2==2){

// }

const isUserLoggedIn = true;
const temperature = 41;

if (isUserLoggedIn) {
}

// if (temperature < 50) {
//   console.log("less than 50");
// }

// <, >, <=, >=, ==, !=, === ( it will also check the data type), !== (not eqtal )to

// EMPTY OBJECTS: to check if the object is empty or not then we have to make the array of the object element and then using the length proparty we can compare with 0

// const emtyObj = {};
// if (Object.keys(emtyObj).length === 0) {
//   console.log("Object is empty");
// }

// ::::::::::::::Nullish Coalescing Operator (??): null undefind ::::::::::::::::

// ?? => Nullish coalescing operator use kora hoy to assign multipal value in a variable. If this value is not available then assign the other value. Onek somy data base theke different different value ase tokhon alada alada  valuer jonno alada function call hoy.
let val1;
// val1 = 5 ?? 10;  // the first value willbe assign
// val1 = null ?? 10;  // jodi kono value na ase tahole null.. er na hole 10 assign hobe
// val1 = undefined ?? 15; //jodi kono value na ase tahole undefind.. er na hole 15 assign hobe
// val1 = null ?? 10 ?? 20;  // jodi kono value na ase tahole null.. er na hole 10 assign hobe nahole 20 assign hobe

// console.log(val1);

// ::::::::::::::::::: terniary Operator :::::::::::::::::::

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
