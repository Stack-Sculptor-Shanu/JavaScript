const name = 'shanu'
const RepoCount = 20

// console.log(name +RepoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${RepoCount}`); //string interpolation

const gameName = new String("Shanu Singh-got-ironman")
// console.log(gameName[0])

// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase()) // used to capitalize each letter of the word
// console.log(gameName.charAt(2)) // to find the character by using its index here we need to pass the index and it will  return the letter
// console.log(gameName.indexOf('u')) // to find the index of the character

const newStr = gameName.substring(0, 4) // it accepts two arguments start index and end index and it will be giving you the character from starting index to last index-1
console.log(newStr)

const anotherStr = gameName.slice(0,-4) // there is a difference between substring and slice that you can use negative indexes in slice method to get the desired string part
console.log(anotherStr)

const strOne = '            shanu              '
console.log(strOne)
console.log(strOne.trim()) // it is used to remove the white spaces 

const url = 'https://shanu.com/shanu%sgok'
console.log(url.replace("%s","-"))

console.log(url.includes('shanu'))

console.log(gameName.split("-"))