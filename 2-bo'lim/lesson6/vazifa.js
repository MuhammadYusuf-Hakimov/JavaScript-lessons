let str1 = " 144 ";
let result1 = Math.sqrt(parseInt(str1.trim()));
console.log(result1); 

let str2 = "7.89";
let result2 = Math.floor(parseFloat(str2)).toString();
console.log(result2); 

let str3 = "-25";
let result3 = Math.abs(parseInt(str3)).toString();
console.log(result3); 

let str4 = "javascript";
let result4 = str4[0].toUpperCase() + str4.slice(1);
console.log(result4); 

let str5 = "81";
let result5 = Math.sqrt(parseInt(str5)).toString().repeat(2);
console.log(result5); 

let str6 = "frontend";
let result6 = Math.pow(str6.length, 2);
console.log(result6); 

let str7 = "125";
let result7 = Math.cbrt(parseInt(str7)).toString();
console.log(result7); 

let str8 = "React JS";
let result8 = str8.replace(" ", "_").toUpperCase();
console.log(result8);

let str9 = "15.51";
let result9 = Math.round(parseFloat(str9)).toString();
console.log(result9); 

let str10 = "HTML,CSS,JS";
let result10 = str10.split(",").length;
console.log(result10); 

let str11 = "49";
let result11 = Math.pow(Math.sqrt(parseInt(str11)), 2);
console.log(result11); 

let str12 = "backend";
let result12 = str12[str12.length - 1].toUpperCase();
console.log(result12); 

let str13 = "  36.9  ";
let result13 = Math.ceil(parseFloat(str13.trim()));
console.log(result13); 

let str14 = "apple banana apple";
let result14 = str14.replaceAll("apple", "orange");
console.log(result14); 

let str15 = "-64";
let result15 = Math.sqrt(Math.abs(parseInt(str15)));
console.log(result15);

let str16 = "hello";
let result16 = str16.repeat(3).length;
console.log(result16); 

let str17 = "100";
let result17 = Math.sign(parseInt(str17));
console.log(result17); 

let str18 = "JavaScript";
let result18 = str18.slice(4).toUpperCase();
console.log(result18); 

let str19 = "5.678";
let result19 = Math.ceil(parseFloat(parseFloat(str19).toFixed(1)));
console.log(result19);

let str20 = " 256 ";
let result20 = Math.floor(Math.cbrt(Math.sqrt(parseInt(str20.trim()))));
console.log(result20); 