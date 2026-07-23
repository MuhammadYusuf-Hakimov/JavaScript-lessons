// let a = prompt("Tugilgan yilingizni kiriting")
// console.log("Siz", 2026 - a, "yoshdasiz");
// ============================
// let yil = prompt("Tug'ulgan yilingizni kirgizing")
// let yosh = 2026 - yil;
// if (yosh < 3 && yosh >0){
//     console.log(`Siz ${yosh} yoshdasiz. Siz chaqaloqsiz`);
// } else if(yosh >=3 && yosh <=6){
//     console.log(`Siz ${yosh} yoshdasiz. Siz maktabgacha ta'limda o'qiysiz`);
// } else if(yosh > 6 && yosh < 18){
//     console.log(`Siz ${yosh} yoshdasiz. Siz maktabda o'qiysiz`);
// } else if(yosh >=18 && yosh <=30){
//     console.log(`Siz ${yosh} yoshdasiz. Siz Universitetda o'qiysiz`);
// } else if(yosh>=31 && yosh<55){
//     console.log(`Siz ${yosh} yoshdasiz. Siz ishda ishlaysiz`);
//  } else if(yosh>=55){
//     console.log(`Siz ${yosh} yoshdasiz. Siz nafaqa olasiz`);
// } else{
//     console.log(`${yosh} | Siz noto'g'ri yosh kirittingiz`);
// }
// ========================
// let summa = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 7 === 0) {
//         summa += i;
//     }
// }

// console.log(summa);
// =========================
// let obj = {
//     id: 1,
//     name: "Sumka",
//     color: "black",
//     price: 100,
//     count: 2
// };
// let sonlarSoni = 0;

// for (let key in obj) {
//     if (typeof obj[key] === "number") {
//         sonlarSoni++;
//     }
// }
// console.log(sonlarSoni);
// ===================
 let obj = {
    id: 1,
    name: "Sumka",
    color: "black",
    price: 100,
    count: 2
    }
// let cloneObj = structuredClone(obj);{
// cloneObj.id = "5"
// cloneObj.name = "Backpack"
// console.log(cloneObj);
// console.log(obj);
//  }

let cloneObj= Object.assign({}, obj);{
cloneObj.id = "10"
cloneObj.color = "White"
console.log(cloneObj);
console.log(obj);
}