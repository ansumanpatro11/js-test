// const tuser=new Object() //singleton
const tuser={} //non singleton
tuser.id="123abc"
tuser.name="sam"
tuser.isLoggedIn= false

console.log(tuser);

//objects inside object
const regularUser={
    email:"123@abc.com",
    fullname:{
        firstname:"rohan",
        lastname:"khan"
    }
}

console.log(regularUser.fullname);


// object merge
const ob1={1:"a", 2: "b"}
const ob2={3:"c",4:"d"}
const ob3=Object.assign({} //target
    , ob1,ob2) //source
console.log(ob3);

// use spread to merge
const obj3={...ob1,...ob2}
console.log(obj3);

const course={
    name:"java",
    price:999,
    courseInstructor:"rohan"
}

// descttructre object
const {courseInstructor}=course
const {courseInstructor:instructor}=course //better readability
console.log(courseInstructor);
console.log(instructor);




