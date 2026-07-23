let a = 5324
let b = 6324
function check (c , d){
    let sum= 0
    for(c; c<=d; c++){
        sum+=c
    }
    return sum
}
let u= check(a , b)
if(u%2===0){
    console.log( u,"bu juft son");
} else{
    console.log(u,"bu toq son");
}
