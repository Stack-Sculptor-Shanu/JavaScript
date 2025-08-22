// let score = 33
// let strScore = '33'
// let numberStrScore = Number(strScore)
// let isLoggedIn = true
// let numberBool = Number(isLoggedIn)
// let mixNumber = Number('33abc')
// let viratScore = null
// let numberedVirat = Number(viratScore)
// let RohitScore = undefined
// let numberedRohit = Number(RohitScore)

// console.log(score) //33
// console.log(typeof score) //number
// console.log(strScore) //33
// console.log(typeof strScore) //string
// console.log(numberStrScore) //33
// console.log(typeof numberStrScore) //number
// console.log(isLoggedIn) //true
// console.log(typeof isLoggedIn) //boolean
// console.log(numberBool) //1
// console.log(typeof numberBool) //number
// console.log(mixNumber) //NaN
// console.log(typeof mixNumber) //nuber
// console.log(viratScore) //null
// console.log(typeof viratScore) //object
// console.log(numberedVirat) //0
// console.log(typeof numberedVirat) //number
// console.log(RohitScore) //undefined
// console.log(typeof RohitScore) //undefined
// console.log(numberedRohit) //NaN
// console.log(typeof numberedRohit) //number

//! upto now we have seen how can I convert string or any other data type into number now we'll try to convert into boolean
// let isLoggedIn = 1
// let boolIsLoggedIn = Boolean(isLoggedIn)
// let married = ''
// let boolMarried = Boolean(married)
// let dinner = 'yes'
// let boolDinner = Boolean(dinner)

// console.log(isLoggedIn) //1
// console.log(typeof isLoggedIn) //number
// console.log(boolIsLoggedIn) //true
// console.log(typeof boolIsLoggedIn) //boolean
// console.log(married) // empty value
// console.log(typeof married) //string
// console.log(boolMarried) // false here the thing we need to remember is empty string will always return false so it is a falsy value
// console.log(typeof boolMarried) // boolean
// console.log(dinner) // yes
// console.log(typeof dinner) //string
// console.log(boolDinner) // true
// console.log(typeof boolDinner) //boolean

//! Now we'll try to convert other datatypes in string
// let someNumber = 2
// let strNum = String(someNumber)
// let married = true
// let strbool = String(married)
// let myscore = undefined
// let strUd = String(myscore)
// let placement = null
// let strNull = String(placement)

// console.log(someNumber) //2
// console.log(typeof someNumber) //number
// console.log(strNum) //2
// console.log(typeof strNum)// string
// console.log(married) //true
// console.log(typeof married) //boolean
// console.log(strbool) //true
// console.log(typeof strbool) //string
// console.log(myscore) //undefined
// console.log(typeof myscore) //undefined
// console.log(strUd) //undefined
// console.log(typeof strUd) //string
// console.log(placement) //null
// console.log(typeof placement) //object
// console.log(strNull) //null 
// console.log(typeof strNull) //string


//*****************Operations********************** */
let value = 3
let negValue  = -value
// console.log(negValue)

// console.log(2+2)
// console.log(20-2)
// console.log(20*2)
// console.log(20**2)
// console.log(20/2)
// console.log(20%2)

let str1 = 'shanu'
let str2 = ' Kumar'
let str3 = str1+str2
// console.log(str3)

// console.log("1"+2) //12
// console.log(1+'2') //12
// console.log(1+'2' +3) //123
// console.log(1+2 +'3') //33

// console.log(true) //true
// console.log(+true) //1
// console.log(+"") //0
// console.log(-"") //-0

// let num1, num2, num3
// num1 = 20
// num2 = 30
// num3 = 40

let gameCounter = 100
gameCounter++ //postfix
console.log(gameCounter) //101
++gameCounter //precedence prefix
console.log(gameCounter) //102
// for more visit documentation mdn 
