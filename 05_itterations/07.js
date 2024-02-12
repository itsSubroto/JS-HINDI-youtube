// :::::::::::::::::: MAP() ::::::::::::::::::::::

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums= myNums.map( (num)=> num+10  )//{return num+10} )
// console.log(newNums);

// :::::::: chain of MAP:::::::::::::::::::::::
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1) // this map will take the values of num after the above map's operations are done... now [10,20,30,40,50......]
  .filter((num) => num >= 40); // this will select who are greater than 40 
console.log(newNums);
