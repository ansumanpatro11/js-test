const coding=["js","cpp","java"]
coding.forEach( function(val){
    console.log(val);
})

coding.forEach( (val)=>{
    console.log(val);
    
} )

// object looping

const myCoding=[
    {
        lang:"js",
        lanFile:"js"
    },
    {
        lang:"c++",
        langFile:"cpp"
    }

]

myCoding.forEach((item)=>{
    console.log(item.lang);
    
}
)