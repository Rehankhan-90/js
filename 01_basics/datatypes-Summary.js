//  Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTem = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 135465745656565465n


// Reference  (Non primitive)

// Array, Objects, Functions 

const heros = ["ironman", "thor", "hulk"]

let myObj = {
    name: "rehan",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);

