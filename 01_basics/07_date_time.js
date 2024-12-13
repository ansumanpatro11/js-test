// Dates

let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatgedDate= new Date(2023,0,23,5,4)
console.log(myCreatgedDate.toLocaleString());

let myTimeStamp = Date.now()


// convrt to comparable time quantuities
console.log(myTimeStamp);
console.log(myCreatgedDate.getTime());

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})







