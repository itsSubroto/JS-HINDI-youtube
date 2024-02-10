// Immediately Invoked Function Expressions (IIFE)

// Kichu kichu function ache jaderke immediately execute korte hoy... like connection to the data base function


// IIFE remove the global scope variabe polution => this should  be the answer of the inteview question "What is IIFE"


// IIEF syn
// syntax:: ()();   => in first () it is for function declaration &&& the next () is for the function call.. and a ; semicolon is mandetory, because the immediate invoke function don't know where to stope...so a ; semicolon is mandetory.

// eg.

(function chai(){
    // named IIFE
    console.log(`DB CONNETED`);
})();

// ()();

( () => {                   // => a arrow function can also be declare in the iife 
    // unnamed IIFE
    console.log(`DB CONNECT TWO`);
})();


( (name) => {           // => a arrow function with parameter can also be declare in the iife 
    //Parameterised IIFE
    console.log(`DB CONNECT TWO`);
})('hitesh'); //=> here the argument declare
