// In JavaScript data types has been categorized in two ways Primitive and non Primitive
// Primitive 7 types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt for bigger values

const score = 100
const anotherScore = 100.3

let userEmail; //undefined
const isLoggedIn = false
const outsideTemp = null

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id)
console.log(anotherId)
console.log(id == anotherId);

const bigNumber = 1651651156151561561165n


// Reference type / Non Primitive
// 1. Array
// 2. Objects
// 3. Functions

const heros = ['Spiderman','IronMan','Wanda','Scarlett witch'];
let myDetails = {
    name:'shanu',
    age:21
}

const myfun = function () {
    console.log("hello shanu")
}

console.log(typeof heros) //object
console.log(typeof myDetails) //object
console.log(typeof myfun) //function although it is actually object function

console.log(typeof bigNumber)