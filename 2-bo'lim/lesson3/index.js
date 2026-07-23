// optional chaining --> ?
// Vazifasi - Xatolikni oldini olish.

// let obj = {
//     id: 1,
//     ism: "Ali",
//     yosh: 20
// };

// console.log(obj?.child?.ism);

// ======================================
// ======================================
// ======================================
// String
// 1.''
// 2.""
// 3.``
// 4. String()
// 5. new string() - constructor           X

// let yil = 2026
// let matn = `Bu yil hozir - ${yil} yil `;
// console.log(matn);

// let str = "Oxford";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[5]);

// loop
// 1. for
// for(let i=0; i<str.length; i++){
    // console.log(str[i]);
// }
// 2. while
// let i = 0
// while(i<str.length){
//     console.log(str[i]);
//     i++
// }
// 3. do while
// let u = 0
// do{
//     console.log(str[u]);
//     u++
// }while(u<str.length)

// console.log(Math.pow(94, 10));
// 4. for of
// for(let value of str){
    // console.log(value);
// }

// let a = "A";
// let b = "a";
// console.log("A" > "a");
// console.log("A" < "a");

// let a = "Oxford";
// let b = "Algoritm";
// console.log(a > b);

// ===============================
// ===============================
// ===============================
// ===============================

// Methods:
// let str = "Algoritm"
// length - bu matnni uzunligini aniqlaydi.
// console.log(str.length);

// CharAt, [], at - Index yordamida xarflar chiqarib beradi.
// console.log(str[0]);
// console.log(str.charAt(0));
// console.log(str.at(0));

// console.log(str[-1]);
// console.log(str.charAt(-1));
// console.log(str.at(-1));

// CharCodeAt - value ning Demical (ASCCI table) codeni chiqarib beradi. 
// console.log(str.charCodeAt());
// console.log(str.charCodeAt(1));

// concat - bir nechta valuelarni bir-biriga bog'lab beradi.
// let matn1 = "Salom";
// let matn2 = ",";
// let matn3 = " ";
// let matn4 = "Yaxshimisiz?";
// let matn = matn1 + matn2 + matn3 + matn4;
// let matn = matn1.concat(matn2, matn3, matn4);
// console.log(matn);

// includes - bir qiymat ichidan qidirilayotgan boshqa qiymatni bor yoki yo'qligini 
// tekshiradi va biz true || false javob qaytaradi.
// console.log("Salom".includes("l"));
// console.log("Salom".includes("w"));

// let name = "O'zbekiston - mening vatanim";
// console.log(name.includes("-"));