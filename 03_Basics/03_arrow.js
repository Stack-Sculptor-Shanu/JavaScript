const user = {
    username : 'shnau',
    price: '9999',
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = 'sam bahadur'
// user.welcomeMessage()
// console.log(this)

// function coffee (){
//     let username = 'shanu'
//     console.log(this.username) //undefined you can access like this in object only
// }
// coffee()

//Arrow function
// const tea = function () {
//     let username = 'shanu'
//     console.log(this.username) //undefined
// }

//Arrow function
const tea = () => {
    let username = 'shanu'
    // console.log(this.username)//undefined
    console.log(this) //{}
}
// tea()

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// const addTwo = (num1, num2)=>num1+num2 //implicit return
// const addTwo = (num1, num2)=>(num1+num2) //implicit return
//But what if you wanna reutn an object
// const addTwo = (num1, num2)=>({name:'shanu'})
// console.log(addTwo(4,5))

const myArray = [1,2,3,4,5]

myArray.forEach((e)=>{
    console.log(e)
})