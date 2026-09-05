// let summa = "03/09/2026T16:43:00, +0500"
// //"03-09-2026, 16:43:00

// summa = summa.split(",")[0].replaceAll("/", "-").replaceAll("T", ", ")
// console.log(summa)


// let parent = {
//     ism1: "Vali",
//     yosh: 60,
//     child: {
//         ism2: "Sami",
//         yoshi: 30,
//     }
// }

// let { ism1, child: { ism2: a } } = parent
// console.log(ism1, a);




// Spread va Rest (...)

// let obj1 = {ism: "Vali"}
// let obj2 = {ism2: "Vali"}
// let obj3 = { ...obj1, ...obj2 }
// console.log(obj3);



// let arr1 = [1, 2]
// let arr2 = [3, 4]
// let arr3 = [5, 6]
// let arr4 = [...arr1, ...arr2, ...arr3]
// console.log(arr4);


// let arr1 = [7 , 4, 5 , 6, 9, 3, 11, 13]
// let arr2 = [5, 12, 76, 34, 45, 2344, 234]

// function getSum(...data) {
//     return data.reduce((acc, cur)=> acc + cur, 0)
// }

// let sum =  getSum(...arr1, ...arr2)
// console.log(sum);


// JSON - JavaScript Object Notation

let data = {
    id: 1,
    ism: "Abubakr",
    familiya: "Turdaliyev",
    yosh: 13,
    joylashuv: {
        mahalla: "Saphoz",
        kocha: "Navro'z",
        uy_raqam: "61",
    },
    skills: ["Videogame", "IT", "Uxlash"],
}

// let dataJson = JSON.stringify('data', 'filter', 'farmater')

let dataJson = JSON.stringify(data, ["id", "ism", "familiya"], 1)
console.log(dataJson);

let newData = JSON.parse(dataJson)
console.log(newData);




let sana = "03/09/2026T16:43:00, +0500"

sana =sana.split(",")[0].replaceAll("/", "_").replace("T", ",")
console.log(sana);