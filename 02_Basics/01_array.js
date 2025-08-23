//Array
const myArr = [0,1,2,3,4,5,6,7]
const myHeros = ['IronMan','spiderman','Wand']
const myArr2 = Array(1,2,4,3)
// console.log(myArr[2])

//Array methods
// myArr.push(9) //push is a method used to push an element at the last index
// myArr.push(11,221)
// console.log(myArr)

// myArr.pop() //pop method is used to remove an element from an array at the last index. it's a no argument method

// myArr.unshift(10) //unshift is a method used to add an element at the starting index
// myArr.shift() // it is also a no argument method which helps us to remove an element from the starting index

// console.log(myArr.includes(100)) //here we have includes method which takes an argument and return a boolean value if the argument is inside the array then it will return true else false
// console.log(myArr.indexOf(5)) //indexOf is a method it takes an argument and return teh index of the particular element if the specified value is not there then it will return -1

const newArr = myArr.join('') // join is a method which binds the element of the array and convert it into string you can also pass separator in the argument
// console.log(newArr)
// console.log(myArr)

//slice and splice
console.log("A ",myArr)

const myN1 = myArr.slice(1,3) // slice is a method which returns the array based upon the arguments here we are passing 1 and 3 we will be receiving the elments having index as 1 and 2 it does not consider the last index. It does not modify the original array
console.log(myN1)
console.log("B ",myArr)

const myN2 = myArr.slice(1,3) // splice is a method which returns the array based upon the arguments here we are passing 1 and 3 we will be receiving the elments having index as 1,2 and 3. It changes the original array
console.log(myN2)
console.log("C ",myArr)