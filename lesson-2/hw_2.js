// Task 1
let x = 20;
let y = 58;
let z = 42;
let summa = x + y + z;

console.log("summa=", summa);

// Task 2
const minute = 60;
const hour = 60;
const day = 24;
const year = 365;
let longYear = 8;
let myAge = 32;
let thisyear = year - 109;
let myAgeInSeconds;
myAgeInSeconds = (myAge * year + thisyear + longYear) * day * hour * minute;

console.log("myAgeInSeconds=", myAgeInSeconds, "s");

// Task 3
let count = 42;
let userName = "42";
//count
count = String(count);
console.log("count", typeof count);

count = Number(count);
console.log("count", typeof count);

count = toString(count);
console.log("count", typeof count);
//userName
userName = +userName;
console.log("userName", typeof userName);

userName = String(userName);
console.log("userName", typeof userName);

userName = Number(userName);
console.log("userName", typeof userName);

// Task 4
let a = 1;
let b = 2;
let c = "белых медведей";

let expression;

expression = String(a) + b + " " + c;
console.log("получилось выражение:", expression);

// Task 5

let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";

let lengthWords;
lengthWords = (word1 + word2 + word3 + word4 + word5).length;
console.log("Длина всех слов", lengthWords);

// Task 6

let what = 1;
let where = "где";
let when = true;

console.log(`Variable: what have type: ${typeof what}`);
console.log(`Variable: where have type: ${typeof where}`);
console.log(`Variable: when have type: ${typeof when}`);

// Task 7
let nameUser = prompt("Как вас зовут?", "Lebowski");
let ageUser = prompt("Cколько вам лет?", 100);
alert("Имя пользователя:" + nameUser + " Возраст:" + ageUser + "лет");

// Advanced

// Task 1

let a1 = 4;
let b1 = 3;
console.log("a1=", a1, "b1=", b1);
b1 = [a1, (a1 = b1)][0];

console.log("a1=", a1, "b1=", b1);
[a1, b1] = [b1, a1];
console.log("a1=", a1, "b1=", b1);

// Task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
console.log(
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]
);
