// Singleton Object: If we are making an object using constructor thenit will be singleton object
// Object.create()
//Object literals

let mySym = Symbol("key1")
let studentDetails = {
    studentsName : "Shanu",
    'full name': 'shanu singh',
    [mySym] : "shanu", //this is the way we can make our symbol as key (syntax)
    age:18,
    location: 'Manali',
    email: 'shanu@gmail.com',
    isLoggedIn : false,
    lastLoginDays: ['Monday',"Saturday"]
}

// console.log(studentDetails.location)
// console.log(studentDetails[location])//❌❌
// console.log(studentDetails["location"]) //✅✅
// console.log( studentDetails[mySym])

studentDetails.email = 'shanujtpr@gmail.com'

// Object.freeze(studentDetails)
// console.log(studentDetails)

studentDetails.greeting=()=>{
    console.log("hello shanu")
}
console.log(studentDetails.greeting())

studentDetails.greetingTwo=function(){
    console.log(`Hello JS user, ${this.studentsName}`) //here this keyword inherits the current object
}
studentDetails.greetingTwo()