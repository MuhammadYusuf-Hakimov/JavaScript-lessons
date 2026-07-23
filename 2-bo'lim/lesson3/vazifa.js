let user1 = { name: "Ali" };
console.log(user1?.name);
console.log(user1?.age);
console.log(user1?.address?.city);

let year = 2026;
console.log(`Hozir ${year} yil`);
let name = "Aziz";
console.log(`Salom ${name}`);
let a = 10;
let b = 20;
console.log(`${a} + ${b} = ${a + b}`);

let str1 = "Oxford";
console.log(str1[0]);
console.log(str1[3]);
console.log(str1[5]);

let str2 = "Java";
for (let i = 0; i < str2.length; i++) {
    console.log(str2[i]);
}

let str3 = "Code";
let i = 0;
while (i < str3.length) {
    console.log(str3[i]);
    i++;
}

let str4 = "Book";
let j = 0;
do {
    console.log(str4[j]);
    j++;
} while (j < str4.length);

let str5 = "Apple";
for (let value of str5) {
    console.log(value);
}

console.log("A" > "a");
console.log("Cat" > "Bat");
console.log("10" > "2");

console.log("JavaScript".length);
console.log("Hello".length);
console.log("Uzbekiston".length);

let str6 = "School";
console.log(str6[0]);
console.log(str6[2]);
console.log(str6[5]);

let str7 = "Computer";
console.log(str7.charAt(0));
console.log(str7.charAt(3));
console.log(str7.charAt(7));

let str8 = "Notebook";
console.log(str8.at(0));
console.log(str8.at(-1));
console.log(str8.at(-3));

let str9 = "ABC";
console.log(str9.charCodeAt(0));
console.log(str9.charCodeAt(1));
console.log(str9.charCodeAt(2));

let s1 = "Salom";
let s2 = " Dunyo";
console.log(s1.concat(s2));
let s3 = "Frontend";
let s4 = " Developer";
console.log(s3.concat(s4));
let s5 = "Java";
let s6 = "Script";
console.log(s5.concat(s6));

console.log("JavaScript".includes("Script"));
console.log("Frontend".includes("Back"));
console.log("Uzbekiston".includes("bek"));  