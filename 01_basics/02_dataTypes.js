"use strict" //treat all JS Nodes as Newr version

//alert(3+3) //we are using nodejs not browser

console.log(typeof undefined); //undeefined
console.log(typeof(null)); //object 

let score="33"
let valueinNumber=Number(score)
console.log(typeof valueinNumber);

//"33" => 3
//"33abc"=>NaN


// **************** operations *************

let value=3
let negValue=-value

// **********data types************
//primitve
//7 types:string,number etc

//r3ference(non primitve)
//array,object,etc 

//raed data types official documentation of js 

//***************************** */

//stack(primitive, Heap(NON-Primitive)

let userone={
    email:"abc@gmail.com",
    upi:"abcd@ybl"
}
let userTwo=userone

userTwo.email="bac@gmail.com"

//(object)-since both are reference to one memomery in heap
console.log(userone.email);
console.log(userTwo.email);

