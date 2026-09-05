const user = {
  name: "Ali",
  age: 14,
  city: "Toshkent"
};
const { name, age, city } = user;
console.log(name, age, city);
const car = {
  brand: "BMW",
  model: "M5",
  year: 2025
};
const { brand, model } = car;
console.log(brand, model);
const student = {
  name: "Vali",
  grade: 8,
  subject: "Math"
};
const { name: studentName, subject } = student;
console.log(studentName, subject);
const fruits = ["Apple", "Banana", "Orange"];
const [first, second, third] = fruits;
console.log(first, second, third);
const numbers = [10, 20, 30, 40];
const [a, b] = numbers;
console.log(a, b);
const colors = ["red", "green", "blue"];
const [red, , blue] = colors;
console.log(red, blue);
function userInfo({ name, age }) {
  console.log(name, age);
}
userInfo({
  name: "Ali",
  age: 14
});
function studentInfo({ name, grade }) {
  console.log(name, grade);
}
studentInfo({
  name: "Vali",
  grade: 8
});
function sum([a, b]) {
  console.log(a + b);
}
sum([10, 20]);
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);
const user1 = {
  name: "Ali",
  age: 14
};
const newUser = {
  ...user1,
  city: "Toshkent"
};
console.log(newUser);
const x = [1, 2];
const y = [3, 4];
const result = [...x, ...y];
console.log(result);
const [number, ...others] = [1, 2, 3, 4, 5];
console.log(number);
console.log(others);
function add(...numbers) {
  console.log(numbers);
}
add(10, 20, 30, 40);
const person = {
  name: "Ali",
  age: 14,
  city: "Toshkent"
};
const { name: personName, ...otherInfo } = person;
console.log(personName);
console.log(otherInfo);