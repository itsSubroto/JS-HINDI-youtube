// ::::::::::: reduce :::::::::::::::::::

const myNums=[1,2,3]
// const myTotal = myNums.reduce(function (accumaletor, currentvalue) {
//     console.log(`acc: ${accumaletor} and currval : ${currentvalue}`);
//     return accumaletor +currentvalue
// }, 0)  // coma , er pora je value ache seta initial value hoye jayc

// console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0) 

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price : 999
    },
    {
        itemName: "mobile dev course",
        price : 5999
    },
    {
        itemName: "data science course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);