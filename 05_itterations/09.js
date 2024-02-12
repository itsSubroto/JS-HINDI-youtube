// ::::::::::: reduce :::::::::::::::::::

const myNums=[1,2,3]
const myTotal = myNums.reduce(function (accumaletor, currentvalue) {
    console.log(`acc: ${accumaletor} and currval : ${currentvalue}`);
    return accumaletor +currentvalue
}, 0)  // coma , er pora je value ache seta initial value hoye jayc

console.log(myTotal);