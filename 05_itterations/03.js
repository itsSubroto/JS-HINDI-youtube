// ::::::::::::::::::::::: For of loop ::::::

// all are array specific loop

// ["", "", ""] ==> element array
// [{},{},{}]  => Object array

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {       // loop apply on each charecter of the string
    // console.log(`Each char is ${greet}`);
}


// ::::::::::::::::::: MAP :::::::::::::::::
// it is a object where duplicale values are not takken .. like i give the india value twice but it take only one time
const map = new Map()
map.set('IN', "India")  // IN is the key and India is the value
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")


// console.log(map);

// ::::::::: loop on MAP ::::::::::::::

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// :::::::::::::::::: for of Loop on Objects::::::::::
const myObject = {
    'game1': "NFS0",
    'game2':"Spiderman"
}

// for (const [key, value] of myObject) {  // error will come saing that "object is not iterable" ,,,, for object we have to use "for in loop"
//     console.log(key, ':-', value);
// }
    

