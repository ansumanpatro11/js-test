function calculateCartPrice(...num1){ //to convert any number of inputs into an array use ...
    return num1
}
console.log(calculateCartPrice(200,300,400));

// another use case
function calculateCartPrice(val1,val2,...num1){ //to convert any number of inputs into an array use ...
    return num1
}
console.log(calculateCartPrice(200,300,400,500)); //outputs 400,500

const user={
    name:"Rohan",
    price:999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
      
}
handleObject(user)
