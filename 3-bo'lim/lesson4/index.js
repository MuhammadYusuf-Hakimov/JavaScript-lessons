// class - object yaratish kerak bo'ladigan shablon

// class Person {
//     constructor(ism, yosh, manzil) {
//         this.a = ism;
//         this.g = yosh;
//         this.c = manzil
//     }
// }

// let obj = new Person("Ali", 20, "O'zbekiston");
// for (let key in obj){
//     console.log(obj[key]);
// }

// ==================================== mine

// class men {
//     constructor(ism, yosh, manzil){
//         this.a = ism;
//         this.b = yosh;
//         this.c= manzil
//     }
// }

// let obj = new men("Muhammadyusuf", 14, "O'zbekiston");
// for (let key in obj){
//     console.log(obj[key]);
// }


// Inheritance - Meros olish

// class Parent {
//     constructor(pul){
//         this.ism = "Eshmt"        
//         this.familiya = "Toshmatov"
//         this.yosh = 45
//         this.skills = ["Html", "Css", "JS"]
//         this.sochi = "oq"
//         this.kasb = "sanatkor"
//         this.pul = "pul"        
//     }

//     getOylik(){
//         return this.pul
//     }
// }

// class Child extends Parent {
//     constructor(pul) {
//         super(pul)
//         this.ism = "Ali"        
//         this.familiya = "Valiyev"
//         this.yosh = 20
//         this.skills = ["Scratch", "Python"]
//     }
// }

// let obj = new Child("$1000");
// console.log(obj)

// Getter and Setter

// get - olish
// set - qo'shish

// class User {
//     constructor(ism){
//         this.ism = ism;
//         this.message = null
//     }
//     get checking(){
//         return this.message
//     }
//     set checking(yosh) {
//         if (yosh >= 15 ) this.message = "Siz Futbol o'ynashga tayyorsiz.✅"
//         else this.message = "Siz Futbol o'ynashga tayyor emassiz. ❌"
//     }
// }

// let obj = new User("Ali")
// obj.checking = 16
// console.log(obj.checking);

// let obj2 = new User("Vali")
// obj2.checking = 12
// console.log(obj2.checking);

// class Futbolchi {
//     constructor(ism){
//         this.ism = ism;
//         this.message = null
//     }
//     get checking(){
//         return this.message
//     }
//     set checking(yosh) {
//         if (yosh >= 15 ) this.message = "Siz Futbol o'ynashga tayyorsiz.✅"
//         else this.message = "Siz Futbol o'ynashga tayyor emassiz. ❌"
//     }
// }

// let obj = new Futbolchi("Eshmat")
// obj.checking = 16
// console.log(obj.checking);

// let obj2 = new Futbolchi("Toshmat")
// obj2.checking = 12
// console.log(obj2.checking);

// class Cat {
//     constructor(ism, yosh) {
//         this.name = ism;
//         this.age = 2
//     }
// }
// class Dog {
//     constructor(ism, yosh){
//         this.name = ism;
//         this.age = yosh;
//     }
// }

// let obj1 = new Cat("Masha", 2)
// let obj2 = new Dog("Simba", 4)

// console.log(obj1 instanceof Cat);
// console.log(obj2 instanceof Dog);