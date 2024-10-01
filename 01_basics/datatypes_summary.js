// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,
//  Bigint

const score = 100
const scoreValue = 100.6

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34565444324567n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["spiderman", "ironman", "superman"]
let myObj =  {
    name: "annas",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// ***************** Memory ******************


// Stack (primitive),  Heap (Non-Primitive)

let myYoutubename = "annaskhanoffical-006"

let anothername = myYoutubename
anothername = "experienceandguide"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "usergmail.com",
    upi: "userapi@"
}

let userTwo = userOne

userTwo.email = "annas@.com"

console.log(userOne.email);
console.log(userTwo.email);

