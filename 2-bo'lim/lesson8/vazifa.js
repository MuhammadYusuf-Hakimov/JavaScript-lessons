// const arr = [1, 2, 3]
// arr.push(4)
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6]
// let t = []
// t.push(2, 4, 6)
// console.log(t);

// ======================================

// const arr = [10, 20, 30]
// arr.pop()
// console.log(arr);

// const arr = [1, 2, 3, 4, 5]
// arr.pop()
// arr.pop()
// console.log(arr);

// ======================================

// const arr = [2, 3]
// arr.unshift(1)
// console.log(arr);

// const arr = [1, 2, 3];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.unshift(arr[i]);
// }
// console.log(result); 

// ======================================

// const arr = [1, 2, 3]
// arr.shift()
// console.log(arr);

// const arr = [1, 2, 3, 4]
// arr.shift()
// arr.shift()
// console.log(arr);

// ======================================

// const arr = [10, 20, 30, 40]
// delete arr[2]
// console.log(arr);

// const arr = [10, 30, 20, 30];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 30) {
//     delete arr[i];
//   }
// }
// console.log(arr);

// ======================================

// const arr = [1, 2, 3, 4]
// console.log(arr.length);

// const arr = [1, 2, 3, 4, 5];
// arr.length = 3;
// console.log(arr);

// ======================================

// const arr = [5, 10, 15]
// console.log(arr.at(2));

// const arr = [1, 2, 3, 4]
// console.log(arr.at(-2));

// ======================================

// const arr = [10, 20, 30]
// console.log(arr.indexOf(20));

// const arr = [1, 2, 3]
// console.log(arr.indexOf(4));

// ======================================

// const arr = [1, 2, 3, 2]
// console.log(arr.lastIndexOf(2));

// const arr = [1, 2, 3, 2, 4];
// let natija;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])) {
    // natija = arr[i];
    // break;
//   }
// }
// console.log(natija); 

// ======================================

// const arr = [1, 2, 3, 4]
// console.log(arr.includes(5));

// const arr = [1, 3, 5, 6];
// const juft = arr.filter(item => item % 2 === 0);
// const natija = juft.includes(6);
// console.log(natija); '

// ======================================

// const str = "Hello world";
// const natija = str.split(" ");
// console.log(natija); 

// const str = "Hi A";
// const natija = str.split("");
// console.log(natija); 

// ======================================

// const arr = ["a", "b", "c"]
// let i = arr.join("-")
// console.log(i);

// const arr = ["Men", "dasturchiman"];
// const natija = arr.join(" ") + ".";
// console.log(natija); 

// ======================================

// const arr = [1, 2, 3]
// let i = arr.reverse()
// console.log(i);

// const str = "hello";
// const result = str.split("").reverse().join("");
// console.log(result);

// ======================================

// const a = [1, 2]
// const b = [3, 4]
// console.log(a.concat(b));

// const a = [1];
// const b = [2];
// const c = [3];
// console.log(a.concat(b, c));

// ======================================

// const arr = [0, 1, 2, 3, 4];
// let i = arr.slice(1, 3)
// console.log(i);

// const arr = [1, 2, 3, 4, 5];
// let i = arr.slice(2, 5)
// console.log(i);

// ======================================

// const arr = [1, 2, 3, 4];
// let i = arr.splice(2, 1)
// console.log(arr);

const arr = [1, 2, 3, 4];
arr.splice(1, 2, 9, 9);
console.log(arr); 