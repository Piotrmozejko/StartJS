// Task 1

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
let conclusionArray = function (value) {
  console.log(value);
};
fibonacci.forEach(conclusionArray);
console.log("---------");
fibonacci.forEach((Element) => console.log(Element));

// Task 2

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
let didUser = function (value, index) {
  value = "member " + (index + 1) + ": " + value;
  return value;
};
let newUsers1 = users.map(didUser);
console.log(newUsers1);

let newUsers2 = users.map(
  (value, index) => (value = "member " + (index + 1) + ": " + value)
);
console.log(newUsers2);

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];
let didPositiveArray = function (value) {
  if (value >= 0) return value;
};
const positive1 = numbers.filter(didPositiveArray);
console.log(positive1);

const positive2 = numbers.filter((value) => value >= 0);
console.log(positive2);

// Task 4
const fibonacci2 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
let didSum = function (accumulator, value) {
  accumulator += value;
  return accumulator;
};
let sum1 = fibonacci2.reduce(didSum);

console.log(sum1);

let sum2 = fibonacci2.reduce((accumulator, value) => (accumulator += value));

console.log(sum2);

// Task 5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let findNumber = function (value) {
  if (value % 2 === 0) return value;
};
let firstNumber1 = numbers2.find(findNumber);
console.log(`Первое чётное число массива ${firstNumber1} `);

let firstNumber2 = numbers2.find((value) => value % 2 === 0);
console.log(`Первое чётное число массива ${firstNumber2} `);

//Advanced

// Task 2
let str = "This website is for losers LOL!";
function deletStr(inputString) {
  let newStr = inputString.replace(/[aeiou]/gi, "");
  return newStr;
}
console.log(deletStr(str));

// Task 3
let strString = "abcdgnf,jhfngf";
let accum = function (str) {
  let lenStr = str.length;
  const array = str.split("");
  console.log(array);
  for (i = 0; i < lenStr; i++) {
    let newstr = "";
    for (n = 0; n < i; n++) {
      newstr += array[i];
    }
    array[i] = array[i].toLocaleUpperCase() + newstr;
  }
  str = array.join("-");
  console.log(str);
};
accum(strString);
