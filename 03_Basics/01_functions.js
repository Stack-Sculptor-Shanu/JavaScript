//Function is nothing but a block of codes that could be executed when needed
//In programming, a function is a named block of code designed to perform a specific task. It takes input (arguments), executes a set of instructions, and can optionally return a value as output. Functions promote code reusability, making programs more organized and easier to understand. 

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("L")
    console.log("L")
}
// sayMyName()

//parameter: In programming, a parameter is a variable listed in a function's definition that acts as a placeholder for data, while an argument is the actual value that is passed to the function when it is called, serving as the input for that parameter
// function addTwoNums (number1, number2) {
//     console.log(number1+number2)
// }

function addTwoNums (number1, number2) {
    let result = number1+number2
    return result
}
// const result = addTwoNums(3,4)
// console.log(result)

// function loginUserMessage(username){
//     if(!username|| username.length == 0){
//         return `Please enter a username`
//     }
//     else{
//         return `${username} just logged in`
//     }
// }

// console.log(loginUserMessage('shanu'))

function calculateCartPrice (val1, ...num1) { //here we are using rest parameter which collects the entire arguments
    return num1 , val1
}
// console.log(calculateCartPrice(200,300,400))

const user = {
    name: 'sam',
    price: 299
}
function handleObject(anyObj){
    return `The user is ${anyObj.name} and the price is ${anyObj.price}`
}
// console.log(handleObject(user)) //you can pass the object direcrtly as well

const newArr = [200,300,400]

function handleArr (arr){
    return arr[2]
}
console.log(handleArr(newArr)) //likewise you cna directly pass array also
