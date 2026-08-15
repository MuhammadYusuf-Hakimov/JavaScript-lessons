// Array Advanced Methods.

// 1. forEach
// 2. map
// 3. filter

// let arr = [1, 2, 3, 4, 5]
// let sum = 0
// arr.forEach( (value, index, a) => (sum+=value) )

// let arr = [
//     {id:1, ism:"Ali", familiya:"Valiyev"},
//     {id:2, ism:"Valiyev", familiya:"Aliyev"},
//     {id:3, ism:"Urmat", familiya:"Gulmatov"},    
// ]

// arr.forEach((obj, index, a) => {
//     console.log(`Hayrli kech ${obj.ism} ${obj.familiya}`);
// })

// Hayrli kech Ali Valiyev.
// Hayrli kech Vali Aliyev.
// Hayrli kech Urmay Gulmatov.

// map

// let arr = [1, 2, 3, 4, 5]

// let newArr = arr.map((value, index, a) => value**2 )
// let newArr = arr.forEach((value, index, a) =>{
    // return value**2
// } )
// console.log(newArr);

// [1, 4, 9, 16, 25]

// let arr = ["olma", "uzum", "nok"]
// let newArr = arr.map((str, index, a) =>{
    // return str.toUpperCase()
// } )
// console.log(newArr);

// ["OLMA", "UZUM", "NOK"]

// filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = arr.filter((value, index, a) => value % 2)
// let newArr = arr.filter((value, index, a) => !(value % 2))
// console.log(newArr);

// [1, 3, 5, 7, 9]

// let arr = [
//     {id: 1, ism:"Musavvir", yosh: 16},    
//     {id: 2, ism:"Abubakr", yosh: 10},
//     {id: 3, ism:"Ikromxon", yosh: 14},
//     {id: 3, ism:"Muhammadyusuf", yosh: 14},
//     {id: 3, ism:"Olimjon", yosh: 14},
//     {id: 3, ism:"Muhammadsolih", yosh: 21},
//     {id: 3, ism:"Zilola", yosh: 16},    
// ]

// yoshi 15 bo'lganlar Hackaton ga qatnasha oladi.

let newArr =  arr.filter((obj) => {
    // return obj.yosh>=15
    return obj.ism.length >=7
} )

console.log(newArr);