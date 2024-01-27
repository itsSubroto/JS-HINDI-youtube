const user = {
    username: "hitesh",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

// this => current constext........ it is use to accese the outer scope variable

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


const chai=  () => {      //=> arrow Function
    let username = "hitesh"
    console.log(this);
}

// chai()

//=> Basic arrow function
// const addTwo= (num1, num2) =>{
//     return num1 + num2
// }

// Impecit Retune
// const addTwo= (num1, num2) => num1 + num2


//=> {} curli braces use hole retune likhtai hobe... but hodi curli bracket use na kore tahole return statement use na korlao cholbe

// const addTwo= (num1, num2) => (num1 + num2)


const addTwo= (num1, num2) => ({username: "hitesh"})



console.log(addTwo(3,4));

