// let a = 10
// const b = 20
// var c = 30

// {}  => it is scope 


if(true){               // true mane loope aa jabi
    let a = 10
    const b = 20
    var c = 30
}  

// console.log(a);
// console.log(b);
// console.log(c);


// Nested scope

function one(){  //=> First scope 
    const username = "hitesh"


    function two(){   //=> Second scope
        const website = "youtube"
        console.log(username);   //=> child can access the parent's variable in there scope
    }

    // console.log(website);  //=> chotora boroder ice-cream niye khate pare but borora chotoder ice-cream niya khate pare na.... same like that First scope (parent) can not acces the second (child) scope variables..... But second scope can access First scope variable

    two()
}

// one()


// 

if(true){
    const username = "hitesh"
    if( username == "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  //=> error will occure

}
// console.log(username);   //=> error will occure


//++++++++++++++++++++++++++++++++++++++  Iteresting  ++++++++++++++++++++++++++++++++++++

// console.log(addone(5)); //=> NOT ERROR
function addone(num){
    return num +1
}
console.log(addone(5));

// console.log(addTwo(5));  //=> ERROR //=> Nicher call ta uppore korle error debe... but upper function er khetra jodi declaration agaoo function call lekha hoye tahole ooo kono error debe na . Etai hoche parthokko..
const addTwo = function(num){   //=> javaScript ee variable khubi powerfull. It can hold any thing . Ekhane addTwo variable hold korche ekta function kee... upore khali function declare kora hoyeche...
    return num +2
}
console.log(addTwo(5));