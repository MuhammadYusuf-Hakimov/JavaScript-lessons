// number -2**53 ... 2**53

// let raqam1 = 10;
// let raqam2 = "20";

// console.log(typeof raqam1);
// console.log(typeof raqam2);

// let num = "100";
// let num = "100.5"
// 1. parseInt()
// console.log(parseInt(num));
// 2. parseFloat()
// console.log(parseFloat(num));
// 3. Number()
// console.log(Number(num));
// 4. +
// console.log(+num);

// Parsing jarayoni deyiladi.

// int - butun son - integer - 1, 2, 3, 4, ......
// float - kasr son  - 1.12323223

// isInteger() - is Integer? - Butun sonmi?

// Boolean type dagi qiymat qaytaradi: true || false

// let a = 5.5;
// let b = 7;
// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b));

// 1 - 1
// 2 - 10
// 3 - 11
// 4 - 100
// 5 - 101
// 6 - 110
// 7 - 111
// 8 - 1000

// let a = 2;  // demical
// let i = a.toString(2); // binary
// console.log(i);

// let i = "1001";
// let n = parseInt(i, 2);
// console.log(n);

// Math methods ------------------

// abs - Manfiy sonni Musbat ga aylantiradi.
// let a = 10;
// let b = -7;
// let c = -100;
// let d = 0;
// console.log(Math.abs(a));
// console.log(Math.abs(b));
// console.log(Math.abs(c));
// console.log(Math.abs(d));

// floor - sonni pastga qarab yaxlitlab beradi.
// let a = 1.3;
// let b = 1.7;
// let c = 1.5;
// let d = 1.9;
// let e = 1.999999;
// let f = 1.000001;  
// console.log(Math.floor(a));
// console.log(Math.floor(b));
// console.log(Math.floor(c));
// console.log(Math.floor(d));
// console.log(Math.floor(e));
// console.log(Math.floor(f));

// ceil - kasr sonni tepaga qarab yaxlitlab beradi.
// let a = 1.3;
// let b = 1.7;
// let c = 1.5;
// let d = 1.9;
// let e = 1.999999;
// let f = 1.000001;  
// console.log(Math.ceil(a));
// console.log(Math.ceil(b));
// console.log(Math.ceil(c));
// console.log(Math.ceil(d));
// console.log(Math.ceil(e));
// console.log(Math.ceil(f));

// round - kasr sonni qiymati 5 yoki undan katta bo'ladigan bo'lsa tepaga qarab
// aks holda pastga qaram yaxlitlaydi.
// let a = 7.1;
// let b = 7.4;
// let c = 7.5;
// let d = 7.9;
// let e = 7.0001;
// let f = 7.9999;
// console.log(Math.round(a));
// console.log(Math.round(b));
// console.log(Math.round(c));
// console.log(Math.round(d));
// console.log(Math.round(e));
// console.log(Math.round(f));

// trunc - kasr sonni faqat butun qismini olib beradi.
// let a = -2.3;
// let b = -2.7;
// console.log(Math.floor(a));
// console.log(Math.floor(b));
// console.log(Math.trunc(a));
// console.log(Math.trunc(b));

// random - 0 va 1 orasidagi tasodifiy kasr sonni chiqaradi.
// let tasodif = Math.random();
// console.log(Math.trunc(tasodif * 10));

// 0 va 1   x
// 0 va 10  /

// min, max
// let kichik = Math.min(6, 10, 16, 18, 32, 1);
// let katta = Math.max(6, 10, 16, 18, 32, 1); 
// console.log(kichik);
// console.log(katta);

// 1. +998 99 111 22 33 

// 2. 99, 91, 90, 93, 94, 50, 33, 77, 78

function getphonenumber(){
    let code1 = Math.trunc(Math.random() * 10);
    let code2 = Math.trunc(Math.random() * 10);

    let code= `${code1}${code2}`; 
    
        if(
        code != "99" &&
        code != "91" &&
        code != "90" &&
        code != "93" &&
        code != "94" &&
        code != "50" &&
        code != "33" &&
        code != "77" &&
        code != "78" 
    ){
        return getphonenumber(); 
    }

    let a = Math.trunc(Math.random() * 10);
    let b = Math.trunc(Math.random() * 10);
    let c = Math.trunc(Math.random() * 10);

    let d = Math.trunc(Math.random() * 10);
    let e = Math.trunc(Math.random() * 10);

    let f = Math.trunc(Math.random() * 10);
    let g = Math.trunc(Math.random() * 10);

    return `+998 ${code} ${a}${b}${c} ${d}${e} ${f}${g}`
}

console.log(getphonenumber());