const marvel_heroes=["thor","ironman"]
const dc_heroes=["batman","superman"]

const all_heroes=marvel_heroes.concat(dc_heroes )
console.log(all_heroes);

// spread
const all_new_heroes=[...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray([1,2,3,4]));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})); //interesting output

let scr1=100
let scr2=200
let scr3=300

console.log(Array.of(scr1,scr2,scr3)); //creates array


