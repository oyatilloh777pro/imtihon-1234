//1-vazifa

// let son = 5;
// let bolinish = Math.floor(son / 2);
// let qoldiq = son % 2;

// alert("5 sonining 2 ga bo'linishi " + bolinish + " va qoldiq " + qoldiq);

//2-vazifa

// let randomNumber = Math.floor(Math.random() * 10) + 1;

// alert("Tasodifiy son: " + randomNumber);

//3-vazifa

// let son = 12.510;
// let butunSoni = Math.floor(son);
// alert("Butun son: " + butunSoni);

//4-vazifa

// function harfSoniTopish(soz) {
//     let harfSoni = soz.length;
//     alert("MARS IT SCHOOL so'zi " + harfSoni + " harfdan iborat.");
// }

// harfSoniTopish("MARS IT SCHOOL");

//5-vazifa

// function MarsSchool() {
//     for (let i = 0; i < 10; i++) {
//         console.log("MARS IT SCHOOL");
//     }
// }

// MarsSchool();

//6-vazifa


// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ];

// let ism = harflar[13] + harflar[22] + harflar[0] + harflar[18] + harflar[7] + harflar[10] + harflar[10] + harflar[13] + harflar[6];

// console.log(ism);

//7-vazifa

// let yosh = prompt("Iltimos, yoshingizni kiriting:");

// if (yosh >= 18) {
//     console.log("Siz balog'ot yoshiga yetgansiz.");
// } else if (yosh < 18 && yosh > 0) {
//     console.log("Siz balog'at yoshiga yetmagansiz 🤣");
// } else {
//     console.log("Noto'g'ri yosh kiritildi.");
// }

// if (yosh == 18) {
//     console.log("Balog'at yoshgi muborak!😇");
// }

//8-vazifa

// const myName = "Oyatilloh";
// const reversedName = myName.split("").reverse().join("");
// console.log(reversedName);

//9-vazifa

// const myArray = ["apple", "banana", "orange", "grape"];

// const firstElementLength = myArray[0].length;
// console.log("Birinchi elementning uzunligi:", firstElementLength);
// alert("Birinchi elementning uzunligi: " + firstElementLength);

// const confirmResult = confirm("Ok tugmasini bosing!");

// if (confirmResult) {

//   const removedElement = myArray.shift();
//   console.log("Olib tashlangan element:", removedElement);
//   console.log("Yangi array:", myArray);
// } else {

//   console.log("Arrayning ichida 4ta element:", myArray);
// }

//10-vazifa

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < sonlar.length; i++) {
//   if (sonlar[i] % 2 === 0) {
//     console.log(sonlar[i]);
//   }
// }
