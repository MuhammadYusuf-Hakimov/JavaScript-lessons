// let arr = ["Olma", "Uzum", "Nok", "Anor", "Nok"]
// let value = arr.find((value, index, a) => value === "Nok");
// let value = arr.find((value, index, a) => value === "Kiwi");
// let value = arr.find((value, index, a) => {
    // if(value === "Anor") return index
// });
// console.log(value);

// findIndex
// let index = arr.findIndex((value, index, a) => value === "Olma")
// let index = arr.findIndex((value, index, a) => value === "Kiwi")
// let index = arr.findIndex((value, index, a) => value === "Nok")
// let index = arr.findLastIndex((value, index, a) => value === "Nok")
// console.log(index);

// sort 
// let arr1 = [20, 7, 50, 5, 5, 1]
// arr1.sort((a, b) => a - b)
// arr1.sort((a, b) => b - a)

// let arr2 = ["Olam", "O'rik", "Bexi", "Tarvuz", "Banan", "Gilos"]
// arr2.sort((a, b) => a.localeCompare(b))
// arr2.sort((a, b) => b.localeCompare(a))

// console.log(arr1);
// console.log(arr2);

// -------------------------------

// && - False qidiradi.
// doim hammasi true bo'lsa keyin true qaytaradi.
// every <=> &&

// || - True qidiradi.
// hech bo'lmaganda bitta true topsa ham javob true bo'ladi.
// some <=> ||

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let hammasiTruemi = arr.every((value, index, a) => value)
// console.log(hammasiTruemi);
// let arr = ["Olma", "Uzum", "Nok", "Anor"]
// let hammasiTruemi = arr.every((value, index, a) => value.length > 3)
// console.log(hammasiTruemi);
// let hammasiTruemi = arr.every((value, index, a) => !(value % 2));
// console.log(hammasiTruemi);

// some
// let arr = [1, -2, -3, -4, -5]
// let hechBolmagandaBittasiTruemi = arr.some((value, index, a) => value > 0)
// console.log(hechBolmagandaBittasiTruemi);

// flat
let nestedArr = [1, [2, [3, [4, [5]]]]]
// let arr1 = nestedArr.flat(1)
// console.log(arr1);
// let arr2 = nestedArr.flat(2)
// console.log(arr2);
// let arr3 = nestedArr.flat(3)
// console.log(arr3);
// let arr4 = nestedArr.flat(4)
// console.log(arr4);
// let arr = nestedArr.flat(Infinity)
// console.log(arr);

// 1. []
// 2. Array()
// fill - fill (value, startIndex, endIndex)
// let arr = Array(5)
// arr.fill("Oxford", 0, 2)
// arr,fill("Algoritm", 2 )
// arr.push("Kosonsoy")
// console.log(arr);

// copyWhithin

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.copyWithin(0, 6)
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
// let newArr = arr.find((value, index, a) => value === 5)
// console.log(newArr);

// let newArr = arr.findIndex((value, index, a)=> value === 5)
// console.log(newArr);

// let newArr = arr.findLastIndex((value, index, a)=> value === 5)
// console.log(newArr);

// let newArr = arr.sort((a, b) => a - b)
// console.log(newArr);

// let newArr = arr.every((value, index, a) => value > 0 )
// console.log(newArr);

// let newArr = arr.some((value, index, a) => typeof value === "string" )
// console.log(newArr);

