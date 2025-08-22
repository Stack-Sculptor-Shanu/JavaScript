// console.log(2>1) //true
// console.log(2>=1) //true
// console.log(2<1) //false
// console.log(2<=1) //false
// console.log(2==1) //false
// console.log(2!=1) //true

console.log("2">1) //true
console.log("02">1) //true

console.log(null>0) //false
console.log(null == 0) //false The equality check (==) does not convert null to a number. null is only equal to undefined in loose equality (==), not to numbers. So, null == 0 is false.
console.log(null >= 0) //true the reason is that an equality check == and comparisons > <   <= >=  work differently. Comparisons convert null to a number, treating it as 0. thats's why (3) null >= 0 is true and (1) null>0 is false

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false

//strict check ===
console.log("2" == 2) //true
console.log("2" === 2) //false it checks data and its types as well