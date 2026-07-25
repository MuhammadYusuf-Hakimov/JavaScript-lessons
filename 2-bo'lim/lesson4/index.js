// startsWith - matn ning boshi biz ber gan qiymat bilan boshlanadimi? shuni tekshiradi
// let a = "+998 99 111 22 33";
// let b = "+1239 23293 88";
// let c = "+7 239 23293 88";

// console.log(a.startsWith("+998"));
// console.log(b.startsWith("+998"));
// console.log(c.startsWith("+998"));

// endsWith - matn ning oxiri biz ber gan qiymat bilan tugaydimi? shuni tekshiradi

// let email1 = "eshmat@gmail.com"
// let email2 = "toshmat@yandex.ru"
// let email3 = "gulmat@mail.com"

// console.log(email1.endsWith("@gmail.com"));
// console.log(email2.endsWith("@gmail.com"));
// console.log(email3.endsWith("@gmail.com"));

// search - matn ichidan ixtiyoriy qiymat, topsa index ni qaytaradi.
// let str = "*Oxf*ord*";
// console.log(str.search("f"));
// console.log(str.search("w"));

// indexOf, lastindexOf - matn ichidan qiymat qidiradi, topsa index qaytaradi
// topolmasa -1 qaytaradi, oldi va orqa tomondan qidirish usullari va aynan 
// qaysi index boshlab qidirishini ham aytsa bo'ladi.
// console.log(str.indexOf("f"));
// console.log(str.indexOf("w"));
// console.log(str.indexOf("*", 5))   
// console.log(str.lastIndexOf("*", 7))

// padStart, padEnd - matn boshiga va oxiriga qiymat qo'shish uchun kerak.
// let n = "91 111 22 33"
// n = n.padStart(6 + n.length, "+998");
// console.log(n);

// let email = "eshmatbek";
// email = email.padEnd(email.length + 10, "@gmail.com");
// console.log(email);

// repeat - qiymatni takrorlash uchun kerak.
// let n = 10;
// console.log(n.toString().repeat(10));

// replace - bir qiymatni ikkinchisiga almashtirish.
// let str = "Men.bugun.Oxford.markazida.IT.darsida.o'tiribman!";
// str = str.replace(".", " ");
// str = str.replaceAll(".", " ");
// console.log(str);