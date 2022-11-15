// Task 1
let schooll = {
  children: 100,
  director: "Вася Пупкин",
};
console.log(schooll);
delete schooll.children;
delete schooll.director;
console.log(schooll);

// Task 2

const car = {
  color: "red",
  speed: "250 km/h",
};
console.log("color" in car);
console.log("big" in car);

// Task 3
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (let key in student) {
  console.log(key);
}
for (let key in student) {
  console.log(student[key]);
}

// Task 4

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(
  `${colors["ru pum pu ru rum"].red} ${colors["ru pum pu ru rum"].blue}`
);

// Task 5

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  misha: 664,
  alexandra: 199,
};
let salary = 0;
let i = 0;
for (let iter in salaries) {
  salary += salaries[iter];
  i++;
}
console.log(i);
let averageSalary = salary / i;
console.log(`Средняя зарпла равна ${averageSalary}`);

// Task 6
const validator = {
  login: "",
  password: "",
};
validator.login = prompt("Введите логин:", "абв");
validator.password = prompt("Введите пароль:", "123");

let check =
  confirm(`Ваш логин ${validator.login}`) &&
  confirm(`Ваш пароль ${validator.password}`)
    ? alert("Добро пожаловать")
    : alert("Что-то пошло не так.");

let check2 =
  validator.login ===
    prompt("Введите логин повторно для потверждения:", "абв") &&
  (validator.password = prompt(
    "Введите пароль повторно для потверждения:",
    "123"
  ))
    ? alert("Добро пожаловать")
    : alert("Что-то пошло не так.");

// Advanced
// Task 1
let gameScore = prompt("Счёт матча", "0:0");
gameScore = gameScore.split("");
const number = {
  0: "ноль",
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять",
};

if (gameScore[1] == ":" && gameScore[3] == undefined) {
  let number1 = gameScore[0];
  let number2 = gameScore[2];
  alert(`Счёт в матче ${number[number1]} : ${number[number2]}`);
} else alert(`Счёт матча не правильный`);

// Task 2
let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};

for (let key1 in student1) {
      student1[key1] === student2[key1]
      ? console.log(
          `Свойство обьектов - ${key1} - одинаковое и равно  ${student1[key1]}`
        )
      : console.log(
          `Свойство обьектов - ${key1} - разные  и равны соотвественно ${student1[key1]} и ${student2[key1]} `
        );
}

// Task 3
const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
};
let say = animals.bird?.name;
console.log(say);
