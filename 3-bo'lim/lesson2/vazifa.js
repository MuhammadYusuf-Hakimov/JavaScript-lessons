// let sana = new Date();

// console.log(sana);
// console.log(sana.getFullYear());
// console.log(sana.getMonth() + 1);
// console.log(sana.getDate());
// console.log(sana.getDay());
// console.log(sana.getHours());
// console.log(sana.getMinutes());
// console.log(sana.getSeconds());
// console.log(sana.getMilliseconds());
// console.log(sana.getTime());
// console.log(sana.toISOString());
// console.log(sana.toDateString());
// console.log(sana.toTimeString());
// console.log(sana.toJSON());

let json = `{
  "name": "Muhammadyusuf",
  "age": 14,
  "birthYear": 2012,
  "grade": 8,
  "school": "Kosonsoy Ixtisoslashtirilgan maktab",
  "favoriteSubjects": [
    "Ingliz tili",
    "Matematika",
    "Jismoniy tarbiya"
  ],
  "hobbies": [
    "Futbol o'ynash",
    "Dasturlash"
  ],
  "languages": [
    "O'zbek tili",
    "Ingliz tili"
  ],
  "device": "Redmi"
}`;

let data = JSON.parse(json);

console.log(data);