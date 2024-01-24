// const tinderUser = new Object() // It declares the object as singlton

const tinderUser ={}            //It declares the object as Non-singlton

// We added some element in the above object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// creating nested objects
const regularUser = {
    email: "hitesh@googel.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// ...Accesing nested objects elements

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//Ways of combining objects

// const obj3 = {obj1, obj2} //=> it works little wrong

// const obj3 = Object.assign({}, obj1, obj2, obj4) //=> Combining two or more objects into one object. Object.assign is use for that thig. {} it is the target location, rest are the source . source are copied into the target on . So {}the empty parenthsis is used.

const obj3 = {...obj1, ...obj2, ...obj4} // => this is spreade method . It sprade al the objects in the target object or location

// console.log(obj3);


// array of Objects
const user =[
    {
        id: 1,
        email: "h@google.com"
    },
    {
        id: 2,
        email: "2h@google.com"
    },
    {
        id: 1,
        email: "h@google.com"
    },
    {
        id: 1,
        email: "h@google.com"
    },
]


// console.log(user[1].email);
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));   //=> the returned datatype is array. It is very usefull for looping... etc.
// console.log(Object.values(tinderUser));   //=> valus of the objects in array data type
// console.log(Object.entries(tinderUser));    //=> valus of the objects in array data type [key, value]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //=> it checks that the key is available in the object or not..... returns in true or false
// console.log(tinderUser.hasOwnProperty('isLogged'));  // => false.. cause this key is not available in object




const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// ... dot dot use karke value ko acces kora ektu complex. Tai nicher method ta use kora hoy
const{courseInstructor: instructor} = course

console.log(instructor);
