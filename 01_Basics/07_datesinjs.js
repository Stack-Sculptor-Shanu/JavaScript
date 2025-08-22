// Dates
// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

// console.log(typeof myDate) //object

// let myCreatedDate = new Date(2025,13,25)
let myCreatedDate = new Date("2025-01-14")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())

newDate.toLocaleString("default",{
    weekday:"long" //customization of date
})