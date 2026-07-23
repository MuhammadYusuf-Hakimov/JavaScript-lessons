// pow - Sonni darajaga oshirib beradi.
// let a = 5;
// 1. **
// console.log(a ** 2);
// 2. Math.pow()
// console.log(Math.pow(a, 2));

// sign - berilgan son manfiymi? || musbatmi?, || 0 ga tengmi? shuni aniqlab beradi.
// 1. -1
// 2. 1
// 3. 0

// let a = -10;
// let b = -7;
// let c = 5;
// let d = 0;
// console.log(Math.sign(a));
// console.log(Math.sign(b));
// console.log(Math.sign(c));
// console.log(Math.sign(d));

// sprt, cbrt - kvadrat && kub ildiz

// 5 ** 2 = 25
// Math.pow(5, 2) = 25

// Ildiz - darajani orqaga qaytarish.

// let raqam = 25;
// console.log(Math.sqrt(raqam));
// let raqam = 625;
// console.log(Math.sqrt(raqam));

// let raqam = 125;
// console.log(Math.cbrt(raqam));

// toString - ixtiyoriy qiymatni stringga aylantirib beradi.
// let n = 2026;
// let str = n.toString();
// console.log(str);
// console.log(typeof str);

// toFixed - sonni kasr qismini qisqartiradi va yaxlitlaydi.
// let n = 10 / 3;
// console.log(+n.toFixed(1));

// let kasr = 1.44456;
// console.log(kasr.toFixed(2));

// isNaN -  qiymatni raqam emasligini tekshiradi.
// Not a Number - bu son emas
// is Not a Number - Bu son emasmi?
// let n = "Oxford2026";
// console.log(isNaN(n));
// let a = ""
// let b = ""
// for(let value of n){
//     isNaN(value) ? (a+= value) : (b += value);
// }
// console.log(a);
// console.log(+b);

// isFinite - qiymat cheklanganligini tekshiradi.
// let natija = 10 / 0;
// console.log(isFinite(natija));
// console.log(natija);

// Object.is - 2 ta qiymat bir-biriga teng ekanligini tekshiradi.
// console.log(Object.is(1, 1));
// console.log(Object.is("1", 1));
// console.log(Object.is(true, true));
// console.log(Object.is(null, null));
// console.log(Object.is(false, 0));

// console.log(0.1 + 0.2);

let a = 100
let b = -100
let c = 5 
console.log(Math.min(a, b, c));
console.log(Math.max(a, b, c));
if(a!=c&& b!=c){
    console.log(c);
}