// 1. length
let text1 = "salom";
console.log(text1.length);

// 2. charAt
let text2 = "Javascript";
console.log(text2.charAt(4));

// 3. at
let text3 = "Web development";
console.log(text3.at(-1));
console.log(text3.at(2));

// 4. charCodeAt
let upper = "A";
let lower = "a";
console.log(upper.charCodeAt(0));
console.log(lower.charCodeAt(0));
console.log(lower.charCodeAt(0) - upper.charCodeAt(0));

// 5. concat
let word1 = "Hello";
let word2 = "World";
console.log(word1.concat(" ", word2));

// 6. includes
let text6 = "Men JavaScript o'rganyapman";
console.log(text6.includes("JavaScript"));

// 7. startsWith
let url = "https://example.com";
console.log(url.startsWith("https"));

// 8. endsWith
let file = "report.pdf";
console.log(file.endsWith(".pdf"));

// 9. search
let phone = "Mening telefon raqamim 99 123 45 67";
console.log(phone.search(/\d/));

// 10. indexOf
let fruits = "qizil olma, yashil olma, sariq olma";
console.log(fruits.indexOf("olma"));

// 11. lastIndexOf
console.log(fruits.lastIndexOf("olma"));

// 12. padStart
let num1 = "42";
console.log(num1.padStart(5, "0"));

// 13. padEnd
let text13 = "Salom";
console.log(text13.padEnd(10, "."));

// 14. repeat
let text14 = "Ba- ";
console.log(text14.repeat(3));

// 15. replace
let text15 = "Men choyni yaxshi ko'raman";
console.log(text15.replace("choy", "qahva"));

// 16. replaceAll
let text16 = "1, 2, 3, 2, 4, 2";
console.log(text16.replaceAll("2", "besh"));

// 17. slice
let text17 = "Kod yozish juda qiziq";
console.log(text17.slice(4, 8));

// 18. substring
let text18 = "Dasturlash";
console.log(text18.substring(0, 5));

// 19. split
let text19 = "olma, banan, gilos, xurmo";
console.log(text19.split(", "));

// 20. trim
let text20 = "   Salom dunyo!   ";
console.log(text20.trim());

// 21. toString
let number = 12345;
console.log(number.toString());

// 22. toUpperCase
let text22 = "Men JavaScript bilaman";
console.log(text22.toUpperCase());

// 23. toLowerCase
let text23 = "HELLO WORLD";
console.log(text23.toLowerCase());

// 24. localeCompare
let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2));

// 25. eval
let expression = "5 + 3 * 2";
console.log(eval(expression));