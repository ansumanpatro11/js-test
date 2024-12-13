const arr=[0,1,2,3,4,5]
const myHeroes=["roh","han"]

//methods
// arr.push(6)
// console.log(arr);
// arr.unshift(9) //adds element at beginning
 

// slice and splice
console.log("A ", arr);

const myn1=arr.slice(1,3)

console.log(myn1);
console.log("B ", arr); //original array is unchanged

const myn2=arr.splice(1,3) 
console.log(myn2);
console.log("C ", arr); //original array is affected




