const myNums=[1,2,3,4,5,6]

const myTotal=myNums.reduce((acc,curr)=>(acc+curr),0)
console.log(myTotal);

const shopCart=[
    {
        item:"js",
        price:499
    },
    {
        item:"cpp",
        price:999
    }
]
const tot=shopCart.reduce((acc,item)=>acc+ item.price,0)
console.log(tot);
