const coding = ["js", "ruby","java","pythone","cpp"]


coding.forEach(function (val) {        // here function is calback function.. so it will not have the function name 
    // console.log(val);
})


// :::::::: arrow function in foreach:::::::::

coding.forEach((item) => {
    // console.log(item);
})

// :::::::::: passing a function that is declare outside, and call inside a foreach ::::::::::::
function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe)



// :::::::::::::: access that has to foreach ::::::::::::::

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

//:::::::::::::::::: object in array:::::::::    
const myCoding = [
    {
        languaegName: "javascript",
        languageFileName:"js"
    },
    {
        languaegName: "java",
        languageFileName:"java"
    },
    {
        languaegName: "python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=> {
    console.log(item.languaegName);
})