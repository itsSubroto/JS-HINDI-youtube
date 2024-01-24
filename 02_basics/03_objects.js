// singleton 

// object literals
// Object.create // constructor method and make object like singleton object

// declaration of symbol
const mySym = Symbol("key1")   // => This is the declaration of symbol

// declaration of OBJECT
const JsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Choudhary",
    // mySym: "myKey1"   //=> this is the wrong way of declaration of symbol
   [mySym] : "myKey1",  //=> this is the ::right:: way of declaration of symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// to access the element of object

// console.log(JsUser.email) //=> This is also a way of accesing the elements. But this not the best way 
// console.log(JsUser["email"]); //=> :::This is the best way:::  of accesing the elements.
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);
// console.log(JsUser.mySym);  //=> This is the wrong way of accessing the ::: symbol ::: in the object
// console.log(JsUser[mySym]);  //=> And this is the right way of accesing the ::: symbol ::: in the object

JsUser.email= "hitesh@chatgpt.com" //=> We are changeing the  value of email
// Object.freeze(JsUser)  //=> It makes the object freez. After this no changes can be possible
JsUser.email= "hitesh@microsoft.com"  //=> After declare the object as freez then the values cann't be chaged

// console.log(JsUser);


// Making funtion in object 


JsUser.greeting = function()
{
    console.log("Hello JS User");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS User , ${this.name}`); //=> "this" keyword is used to tell that i need elements of this OBJECT.
}
// Accesing that
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

