// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = '123'
tinderUser.name = 'sam'
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        firstname: 'Shanu',
        lastname: 'singh'
    }
}
// console.log(regularUser?.fullname)

const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}

// let mergedObj = {obj1, obj2}
// let mergedObj = Object.assign(obj1,obj2)
// let mergedObj = Object.assign({}, obj1, obj2) // here is a confusion like 22 and 23 line returns the same thing then why are we putting an empty object here. So the first argument is target means where we need to store or merge the object
// let mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)
// console.log(obj1)

const users = [
    {
        id:1,
        email: "shanu@gmail.com"
    },
    {
        id:1,
        email: "shanu@gmail.com"
    },
    {
        id:1,
        email: "shanu@gmail.com"
    },
    {
        id:1,
        email: "shanu@gmail.com"
    }
]

users[1].email

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggeIn'))

const course = {
    courseName: "JavaScript",
    price: 1000,
    Instructor: 'Shanu'
}

const {courseName, price, Instructor} = course
// console.log(courseName)
// console.log(Instructor)

//JSON (JavaScript Object Notation)