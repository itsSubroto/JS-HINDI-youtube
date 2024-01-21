// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);  // array index start from Zero (0)

//  shalow copy & deep copy
// shalow copy : changes the original array after changing
// Deep copy : don't changes the original array after changing


// Array Methods

// myArr.push(6)  //=> it will add the value to the array
// myArr.push(7)

// myArr.pop()  //=> it will remove an element from the array

// myArr.unshift(9)  //=> it will add that num or value in the array in the starting
// myArr.shift()     //=> it will remove that num or value in the array in the starting


// console.log(myArr.includes(9));  //=> asking is the element is present in the array or not . It will be true or flase >>> boolean type
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));  //=> show the index of the perticular element


// const newArr = myArr.join() //=> Adds all the elements of an array into a string, meands it will change the data type of the array to string

// console.log(myArr);  //=> output: [ 0, 1, 2, 3, 4, 5 ] => array
// console.log(newArr); //=> output: 0,1,2,3,4,5  => string


// //slice & splice
// slice => return section of an arary . it just cut the perticular Element from the array. But do not change the original array. 

// splice => Also return section of an arary . But it changes the original array.

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  // => include the 1st index but don't include the 3rd element

console.log(myn1 , "slice");
console.log("B", myArr);


const myn2 = myArr.splice(1,3)  // => include the 1st index and also include the 3rd element.... But changes the original array

console.log(myn2, "splice");
console.log("B", myArr);