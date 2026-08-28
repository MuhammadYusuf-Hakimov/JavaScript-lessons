// Distructure - 3 xil bo'ladi

// 1. Object Distructure
// 2. Array Distructure
// 3. Paramental(function) Distructure

// let obj = {
//     id: 1,
//     ism: "Ali",
//     yosh: 20,
//     dosti: {
//         id: 2,
//         ism: "Vali",
//         yosh: 20,
//     },
// };

// console.log(obj.ism);
// console.log(obj.dosti.ism);

// let {ism, dosti:{ism:a}} = obj

// console.log(ism);
// console.log(a);

// let arr = [7.2837283782, 2.1272817282, 3.23343354, ["Algoritm", "Oxford"]]

// let [a, b, c, [d, e]] = arr

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// console.log(arr[3][0]);
// console.log(arr[3][1]);

// let obj = {
//     name: "Laptop",
//     color: "Silver",
//     price: "$700",
//     models: ["Hp", "Lenovo", "Asus", "MAcbook", "Acer", "Toshiba"],
// }

// function getSum({name, color, price, models: [a, b, c, d, e, f] }) {
//     console.log(name);
//     console.log(color);
//     console.log(price);
//     console.log(a, b, c, d, e, f);
// }

// getSum(obj)

// Spreed, Rest
// ...

// let obj1 = { a: 1 }
// let obj2 = { b: 2 }

// let obj = Object.assign(obj1, obj2)
// let arr = [...obj1, ...obj2 ]

// console.log(obj);

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// let arr = arr1.concat(arr2)
// let arr = [...arr1, ...arr2]

// console.log(arr);

// function getSum(a, b, c, ...raqamlar) {
//     let yigindi = raqamlar.reduce((acc, cur) => acc + cur, 0)
//     console.log(yigindi);
// }

// getSum(1, 2, 3, 4, 5, 6, 7, 8, 9)


// spreed - qobiqlarni ochadi, parchalaydi
// rest - bitta arrayga yig'adi, jamlaydi