// const coding = ["js", "ruby", "java", "pythone", "cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item // for each do not returne value inside a variable
// });

// console.log(values);    // for each do not returne value inside a variable

//::::::::::::::::: FILTER :::::::::::::::
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);  // ekhane arrow function ee {} brackets use korini tai return statement likhte hoche na .... But Jokhon {} use hobe tokhon return statement use kortai hobe... example is below

// const newNums = myNums.filter((num) => {
//     return num > 4       // return statement is must inside the {} brackets
    
// });


// console.log(newNums);  // filter can return values


// :::::::::::::::::::: If we want to return in for each ::::::::::

// const newNum=[]
// myNums.forEach((num) => {
//     if (num>4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);



// :::::::::::::::::::: Data from Data Base if form of array of objects  ::::::::::

const book = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book fore', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];
let userBooks = book.filter((bk) => bk.genre === 'History')  // filering items

userBooks = book.filter((bk) => {
   return bk.genre === 'History' && bk.publish>=1995
})  

console.log(userBooks);