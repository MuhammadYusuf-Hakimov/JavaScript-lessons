// let obj = {
//     ism: "Marker",
//     soni: 3,
//     maqsadi: "Yozish",
//     yil: 2026,
//     rang: ["qora", "ko'k", "qizil"]
// }
// console.log(obj);
// let obj = {
//     ism: "Eshmat",
//     yosh: 20
// }

// let cloneObj= Object.assign({}, obj);
// cloneObj.ism = "Toshmat"
// cloneObj.yosh = 100
// console.log(cloneObj);
// console.log(obj);

// let cloneObj = structuredClone(obj);
// cloneObj.ism = "Toshmat"
// cloneObj["yosh"] = 100
// console.log(cloneObj);
// console.log(obj);


// =================

// let obj = {
//     ism: "Eshmat",
//     yosh: 60,
//     child:{
//         ism: "Toshmat",
//         yosh: 20
//     },
// };
// let cloneObj = structuredClone(obj);
// cloneObj.ism = "Ali"
// cloneObj.child.ism = "Vali"
// console.log(cloneObj);
// console.log(obj);

// Qoida
// 1. Objlarda key 2 va undan oqtiq takrorlangan bo'lsa eng oxirgi kalit
//  obj qoladi, boshqasi o'chiriladi
// 2. obj kalit va qiymatlari bir xil nomga ega bo'lgan bo'ldsa uni qisqartirib 
// bitta yozib ketish mumkin

// let obj = {
//     ism: "Ali",
//     yosh: 20
// }
// obj.ism = null 
// delete obj.ism
// obj = {}
// console.log(obj);

// let manzil = "Kosonsoy"
// let daraja = "Muhammadyusuf"