const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);

const num=23.9874

console.log(num.toPrecision(4)); //rounds off

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'));

// ************* maths *******************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.4));
console.log(Math.sqrt(3.3));

// Math.random gives random val between 1 and 0
console.log(Math.floor(Math.random()*10)+1);
// trick
const min= 10
const max=20

console.log(Math.floor(Math.random() * (max-min +1))+min);



