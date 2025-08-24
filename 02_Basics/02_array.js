const marvelHeros = ['thor','Scarlett witch','IronMan']
const DCHeros = ['Superman','Batman']

// marvelHeros.push(DCHeros) //returns array inside array
// console.log(marvelHeros)

// let mergedArr = marvelHeros.concat(DCHeros) //concat method will be returning a new array along with merging the elements
// console.log(mergedArr)

//Spread operator
// const all_new_heros = [...marvelHeros, ...DCHeros]
// console.log(all_new_heros)

// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const usableAnotherArr = another_arr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(usableAnotherArr)

console.log(Array.isArray("Shanu")) // Array.isArray is a method by which I can check whether the particular thing is an array or not

console.log(Array.from("Shanu")) //Array.from is a method by which we can convert it into an array

console.log(Array.from({name:"Shanu"})) // it can't be converted into an array

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3))