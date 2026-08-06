// let str = "Men Oxford Markazida O'qiyman.";
// let arr = str.split(" ");
// console.log(arr.length);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let natija = arr.slice(6, 9).concat(arr.slice(6, 9), arr.slice(6, 9));
// console.log(natija);

// let matn = "Oxford - bu Kosonsoy markazida joylashgan!"
// let bormi = matn.includes("Kosonsoy")
// if(bormi){
//     let i = matn.indexOf("K")
//     let nusxaMatn = matn.slice(i, i+8)
//     console.log(nusxaMatn);
// }

// let text = "Oxford o'quv markazi!";
// let teskari = text.split("").reverse().join("")
// console.log(teskari);

// let meva = "Banan";
// let obj = {};
// for(let value of meva){
//     obj [value] ? (obj[value] +=1) : (obj[value] = 1)
// }
// console.log(obj);

let data = ["Olma", "Nok", "Apelsin", "Anor"];
let i = data.splice(0, 1)
let k = data.splice(1, 1)
data.push("Tarvuz")
console.log(i.concat(k));
console.log(data);