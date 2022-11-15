// Task 1
const colors = ["red", "green", "blue"];
console.log(`Длина массива colors ${colors.length}`);

// Task 2
const animals = ["monkey", "dog", "cat"];
let lastElement = animals[animals.length - 1];
console.log(`Последний элемент массива animals: ${lastElement}`);

// Task 3
const numbers = [5, 43, 63, 23, 90];
console.log(numbers);
function deleteElement(array) {
  for (let i = 0; i < array.length; ) {
    array.shift();
  }
  console.log(numbers);
}
deleteElement(numbers);
// Второй метод
numbers.splice(0, numbers.length);
console.log(numbers);

// Task 4
const students = ["Polina", "Dasha", "Masha"];

function actionArray(array) {
  array.pop();
  array.push("Borya");
  array.shift();
  array.unshift("Andrey");
  console.log(`Получился массив ${array}`);
}
actionArray(students);

// Task 5
const cats = ["Gachito", "Tom", "Batman"];
function screenArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log("-----");
  for (const index of array) {
    console.log(index);
  }
}
screenArray(cats);

// Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const newArray = [...evenNumbers, ...oddNumbers];
console.log(newArray);
console.log(`Индекс числа 8 - ${newArray.indexOf(8)}`);

// Task 7
const binary = [0, 0, 0, 0];
let str = binary.join("1");
console.log(str);

// Advanced
// Task 1
let wordNormal = prompt("Веведите слово для проверки", "шалаш");
function checkWord(word) {
  const wordArray = word.split("");
  wordArray.reverse();
  let wordRevers = wordArray.join("");
  word === wordRevers
    ? alert(`Слово ${word} является палиндромом`)
    : alert(`Слово ${word} не является палиндромом`);
}
checkWord(wordNormal);

// Task 2

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
function conclusionMean(array) {
  let conclus = 0;
  i = 0;
  for (const key in array) {
    for (const iterator of array[key]) {
      conclus += iterator;
      i++;
    }
  }
  conclus = conclus / i;
  console.log(`Среднее значение чисел матрицы равно ${conclus}`);
}
conclusionMean(matrix);

// Task 3

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
function fitArray(array) {
  const positivArray = [];
  const negativArray = [];
  for (const iterator of array) {
    iterator >= 0 ? positivArray.push(iterator) : negativArray.push(iterator);
  }
  console.log(positivArray);
  console.log(negativArray);
}
fitArray(mixedNumbers);

// Task 4
let lengthArray = +prompt("Какой длины хотите создать массив не менее 5", "5");

let randomNumbers = +prompt("Рандомные числа будут до :", "20");
//let lengthArray = 10;
//let randomNumbers = 50;
function cubes(length, random) {
  const arrayRandom = [];
  const arrayCube = [];
  length < 5 ? (length = 5) : (length = length);

  for (i = 0; i < length; i++) {
    arrayRandom.push(Math.round(Math.random() * random));
  }
  for (const iterator of arrayRandom) {
    arrayCube.push(Math.pow(iterator, 3));
  }
  alert(arrayRandom);
  alert(arrayCube);
}
cubes(lengthArray, randomNumbers);
