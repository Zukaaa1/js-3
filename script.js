// let myName = "Zura";

// let greeting = "Hello";
// let greeting2 = `Hello`;
// let fullText = `${greeting} ${myName}! Welcome Back`;

// let textLenght = fullText.length - 1;
// console.log(fullText[textLenght]);

// console.log(fullText.toUpperCase());
// console.log(fullText.toLowerCase());

// let greeting = "Zura";
// console.log(greeting.indexOf("a"));
// ?E e სხვადასხვაა
// console.log(greeting.includes("Zura"));

// if (greeting.includes("Zura")) {
//   console.log("ეს წინადადება შეიცავს სიტყვა Zura-ს");
// } else {
//   console.log("ეს წინადადება არ შეიცავს Zura-ს");
// }

// ! ClassWork
let userName = prompt("დაწერეთ მხოლოდ თქვენი სახელი");

if (userName && userName.includes(" ")) {
  console.log("არ უდნა შეიცავდეს space-ს");
} else {
  console.log(`Hello, ${userName}`);
}
