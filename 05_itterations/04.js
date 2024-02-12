const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift by apple'
}


// ::::::::::::::::: for in loop On Objects:::::::::::

for (const key in myObject) {
    // console.log(key);  // here we are getting keys(js, cpp, rb, swift)
    // console.log(myObject[key]); // here we are getting values (javascript, c++, ruby, swift by applr)

    // Now combine the both in single line
    // console.log(`${key} shortcut is for ${myObject[key]}`);   //***********
}



// ::::::::::::::::: for in loop On Array:::::::::::

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);  // here we are getting keys(0,1,2,3,4,5.....) similar to indx

    // console.log(programming[key]); //here we are getting values (js", "rb", "py", "java", "cpp")
}


// ::::::::::::::::::::::::: map:::::::::::
const map = new Map()
map.set('IN', "India")  // IN is the key and India is the value 
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")


for (const key in map) {
    console.log(key);     // map is not iterable
}



// *************************************** IMPORTANT 
// for in is used for => objects
// for of is used for => arary