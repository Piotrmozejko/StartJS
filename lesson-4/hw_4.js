// Task1

let number = +prompt("Введите число:", "0");
function getSum(maxNumber) {
  let sum = 0;
  for (let i = 0; i <= maxNumber; i++) {
    sum = sum + i;
  }
  return sum;
}
alert(`Сумма всех чисел от 0 до ${number} равна ${getSum(number)}`);

// Task 2

let credit = +prompt("Какую сумму кредита вы хотите получить?", "0");
let maxCredit = 350000;

let calculatCredit = function (sumCredit) {
  let year = 5;
  let month = 12;
  let percent = 0.17;
  let overpayment = 0;
  for (let i = 1; i <= month * year; i++) {
    overpayment = overpayment + sumCredit * (percent / month);
    sumCredit = sumCredit - sumCredit / (year * month);
  }
  return overpayment;
};
let maxOver = calculatCredit(credit).toFixed(2);
if (credit <= maxCredit)
  alert(`При кредите равном ${credit} переплата составит ${maxOver} `);
else alert(`Вы превысили максимально допустимую сумму кредита ${maxCredit}`);

// Task 3
let sentence = prompt("Веведите строку", "абвг");
let startNumber = +prompt("Введите число начала строки", "1");
if (startNumber > 0) startNumber = startNumber - 1;
let finishNumber = +prompt("Введите число конца строки", "2") - 1;

const outString = (line, number1, number2) => {
  let sentence1 = "";
  for (; number1 <= number2; number1++) {
    sentence1 = sentence1 + sentence[number1];
  }
  return sentence1;
};
alert(
  `Получилось выражение: ${outString(sentence, startNumber, finishNumber)}`
);

// Task 4

let numberSum = prompt("Введите число:", "0");

function getSumNumbers() {
  let lengthNumber = numberSum.length - 1;
  numberSum = numberSum.split("");
  let sum = 0;
  for (let i = 0; i <= lengthNumber; i++) {
    sum = sum + Number(numberSum[i]);
  }
  return sum;
}
alert(`Сумма всех цифр числа ${numberSum} равна ${getSumNumbers()}`);

// Task 5

let numberA = +prompt("Введите число a:", "0");
let numberB = +prompt("Введите число b:", "0");
if (numberA === numberB)
  alert(`Числа a и b равны друг другу и равны ${numberA}`);
else if (numberA < numberB)
  alert(
    `Сумма всех цифр от ${numberA} до ${numberB} равна ${getSumarry(
      numberA,
      numberB
    )}`
  );
else
  alert(
    `Сумма всех цифр от ${numberB} до ${numberA} равна ${getSumarry(
      numberB,
      numberA
    )}`
  );

function getSumarry(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }
  return sum;
}

// Task 6

let choice = confirm("Вы готовы перейти на тёмную сторону?");

let foo = () => console.log("foo");
let boo = () => console.log("boo");
let fooboo = (a, b, c) => {
  if (a === true) b();
  else c();
};
fooboo(choice, foo, boo);

// Advanced
// Task 1
let checkNumber = (a) => {
  if (!Number.isInteger(a)) return false;
  else return true;
};
let sideA = +prompt("Длину стороны А треугольника", "0");
let sideB = +prompt("Длину стороны B треугольника", "0");
let sideC = +prompt("Длину стороны C треугольника", "0");
if (checkNumber(sideA) && checkNumber(sideB) && checkNumber(sideC))
  alert(`Можно построить треугольник - ${buildTriangle(sideA, sideB, sideC)}`);
else alert(`Вы ввели не целочисленную длину стороны треугольника`);

function buildTriangle(a, b, c) {
  let triangle = a + b > c && b + c > a && c + a > b;
  return triangle;
}

// Task 2
let widthCoco = +prompt("Длину ширина шоколадки", "0");
let lengthCoco = +prompt("Длину длина шоколадки", "0");
if (widthCoco >= 1 && lengthCoco >= 1) division(widthCoco, lengthCoco);
else alert(`Ничего делить не нужно, вы полный 0`);

function division(a, b) {
  let fault = a - 1 + (b - 1) * a;
  if (fault == 0) alert(`Ничего делить не нужно, вы полный 0`);
  else alert(`Количество разломов шоколадки равно ${fault}`);
}

// Task 3
const maxAmound = 10;
let amound = 1;
let telMoney = +prompt("Сколько у вас денег на покупку рублей?", "0");
let telefon = true;
let accessories = true;
let again = true;
let costAccessories = 0;
let costTelefon = 0;
let money = 0;
while (
  (telefon || accessories) &&
  again &&
  amound <= maxAmound &&
  money < telMoney
) {
  telefon = confirm("Вы хотите купить телефон?");
  if (telefon) {
    costTelefon = buyTelefon();
  } else costTelefon = 0;
  accessories = confirm("Вам нужны акцесуары?");
  if (accessories) {
    costAccessories = buyAccessories();
  } else costAccessories = 0;
  again = confirm("Вы хотите купить ещё телефон или акцесуары?");
  if (amound > maxAmound)
    alert(`Вы достигли максимальное количество покупок 10.`);
  money = money + costTelefon + costAccessories;
  if (money > telMoney) {
    alert(
      `Вы превысили доступную вам сумму средств. Последняя покупка будет удалена с корзины.`
    );
  }
}
if (money > maxAmound) {
  money = money - costAccessories;
}
if (money > maxAmound) {
  money = money - costTelefon;
}
alert(`Сумма всех покупок ${money} расчитайтесь`);

function buyAccessories() {
  let sum = 0;
  let direction = prompt(
    "Кие аксессуары вы хотели приобрести: Наушники, Зарядку, Чехол, Стекло",
    "Наушники"
  );
  switch (direction) {
    case "Наушники":
      alert("Вы выбрали Наушники ценной 402");
      sum = 402;
      break;
    case "Зарядку":
      alert("Вы выбрали Зарядку ценной 88");
      sum = 88;
      break;
    case "Чехол":
      alert("Вы выбрали Чехол ценной 218");
      sum = 218;
      break;
    case "Стекло":
      alert("Вы выбрали Стекло ценной 20");
      sum = 20;
      break;
    default:
      alert("Что то пошло не так :-)");
  }
  return sum;
}

function buyTelefon() {
  let sum = 0;
  let direction = prompt(
    "Какой телефон вы хотите: Samsung, Pocofone, Iphone, Xiaomi",
    "Samsung"
  );
  switch (direction) {
    case "Samsung":
      alert("Вы выбрали Samsung ценной 2564");
      sum = 2564;
      break;
    case "Pocofone":
      alert("Вы выбрали Pocofone ценной 899");
      sum = 899;
      break;
    case "Iphone":
      alert("Вы выбрали Iphone ценной 3566");
      sum = 3566;
      break;
    case "Xiaomi":
      alert("Вы выбрали Xiaomi ценной 1800");
      sum = 1800;
      break;
    default:
      alert("Что то пошло не так :-)");
  }
  return sum;
}
