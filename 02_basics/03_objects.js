// sigleton


const mySym=Symbol("key1")
// object literals
const JsUser={
    name:"rohan",  //key are granted as string, but you can define value as per your choice
    age:10,
    [mySym]:"myKey1",//syntax fror symbol
    location:"bbsr",
    email:"abc@gmail.com",
    isLoggedIn: false
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof mySym);

JsUser.email="acb@gmail.com"
// Object.freeze(JsUser)  //no changes allowed futher
JsUser.email="a"
console.log(JsUser);

JsUser.greeting = function(){
    console.log('hello JS user');
    
}
JsUser.greetingtwo = function() {
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());




  