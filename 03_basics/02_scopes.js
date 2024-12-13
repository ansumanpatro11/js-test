let a=10
const b=20
var c=30

function one(){
    const username="rohan"

    function two(){
        const webset="yt"
        console.log(username);
        
    }
    // console.log(webset); //parent cant access elements of child
    two() //child can access elements of parent
    
}
one()

if(true){
    const username="rohan"
    if(username==="rohan"){
        const website=" yt"
        console.log(username+website);        
    }
    // console.log(website);

    
}
// console.log(username); //cants access outside scope

// ****************** intereating **************
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)  //error
const addTwo = function(num){
    return num + 2
}

