// let webbrain = {
//   frontend: {
//     1: { course: "react", price: 120 },
//     2: { course: "vue", price: 110 },
//     3: { course: "angular", price: 100 },
//   },
//   backend: {
//     1: { course: "java", price: 120 },
//     2: { course: "php", price: 110 },
//     3: { course: "nodejs", price: 100 },
//   },
//   mobile: {
//     android: {
//       1: { course: "android", price: 120 },
//       2: { course: "flutter", price: 110 },
//     },
//     ios: {
//       1: { course: "ios", price: 120 },
//       2: { course: "flutter", price: 110 },
//     },
//   },
// };

// let summa = 0
// for(let key in webbrain){
//     let obj = webbrain[key]
//     for(let key2 in obj){
//         if(`${+key2}` === "NaN"){
//             let obj2 = obj[key2]
//             for (let key3 in obj2){
//                 summa+=obj2[key3].price
//             }
//         } else{
//             summa+=obj[key2].price
//         }
//     }
// }
// console.log(summa);

// let obj = {
//     id: 1,
//     name: "Macbook",
//     price: 1000,
//     marka: "USA",
//     chip: "M4",
//     active: false,
//     color: "Silver"
// }

// function getSortData(data) {
//     let newObj = {}
//     for (let key in data) {
//         if (typeof data[key] === "number") {
//             newObj.raqam ? (newObj.raqam += 1) : (newObj.raqam = 1)
//         } else if (typeof data[key] === "boolean") {
//             newObj.boolean ? (newObj.boolean += 1) : (newObj.boolean = 1)
//         } else if (typeof data[key] === "string") {
//             newObj.matn ? (newObj.matn += 1) : (newObj.matn = 1)
//         }
//     }
//     return newObj
// }
// console.log(getSortData(obj));

// let obj = {
//     id: 1,
//     name: "Macbook",
//     price: 1000,
//     marka: "USA",
//     chip: "M4",
//     active: false,
//     color: "Silver"
// }

// let len = 0 
// let result;
//     for(let key in obj){
//         if(obj[key].length > len){
//             len = obj[key].length
//             result = {key : obj[key]}
//         }
//     }
// console.log(result);