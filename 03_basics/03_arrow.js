const user={
    username:"Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }

}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log();

// global obkect inside browser is window, but in node it is empty object
function chai(){
    let username="roh"
    console.log(`${this.username}`);
    
}
// this works for object not for function
chai()


// ************arrow***************
const chai2 =  () => {
    let username = "hitesh"
    console.log(this);
}
chai2()

const addTwo = (num1,num2) => {
    return num1+num2
}

// implicit return type
const addTwoTwo= (num1,num2) => (num1+num2)
console.log(addTwoTwo(3,4));

const objectfunc = () => ({username:"rohan"})
console.log(objectfunc());

