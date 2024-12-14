const map= new Map

map.set("1","a")
map.set("2","b")
map.set("3","c")

for (const [key,val] of map) {
    console.log(key, ":- ", val);
        
}

// loop on object forin
const myobject={
    1:"a",
    2:"b",
}
for (const key in myobject) {
    console.log(`${key} has value ${myobject[key]}`);
    
}