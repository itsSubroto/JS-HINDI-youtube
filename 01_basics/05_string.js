const name ="subroto";
const repocount=50;

console.log(name + repocount+"Value");
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName= new String('hitesh-hc')
// const gameName= new String('subrata')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString =gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne="   hitesh"
console.log(newStringOne);
console.log(newStringOne.trim());


const url="http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));



