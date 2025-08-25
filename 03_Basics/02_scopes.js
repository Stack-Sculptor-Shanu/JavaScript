// var c = 300

//Scope: In JavaScript, "scope" defines the accessibility and visibility of variables, functions, and objects within different parts of your code. It determines where in your program you can access and use a particular identifier (like a variable name).
let a = 300 //if something is declared like this then it is having global scope
//Whatever written here inside the curly braces is in block scope
if(true){
    let a = 10
    const b = 20 
    // var c = 30
    // console.log("inner",a)
}
// console.log(a)
// console.log(b)
// console.log(c)

function one (){
    const username = "shanu"
    function two() {
        const website = 'Pasmina'
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if (true){
    const username = 'shanu'
    if(username == "shanu"){
        const website = ' youtube'
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++
addOne(5) //no error successfully executed
function addOne (num) {
    return num + 1;
}

addTwo(5) //error can't access (This is hoisting)
const addTwo = function (num) {
    return num+2
}