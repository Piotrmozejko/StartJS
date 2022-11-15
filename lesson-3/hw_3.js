// Task 1
let a = "true";
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log(
  `a type: ${typeof a}, b type: ${typeof b}, c type: ${typeof c}, d type: ${typeof d}, e type: ${typeof e}, `
);

// Task 2
let height = 15;
let width = 20;

if (height > width) console.log(`Большее число ${height}`);
else console.log(`Большее число ${width}`);

// Task 3

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) console.log(i);
}

// Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = (apple || orange) && key && documents && pen;

console.log(`Go work ${shouldGoToWork}`);

// Task 5
let number = prompt("Введите число:", "0");
if (number % 3 == 0 && number % 5 == 0) alert("FizBuz");
else if (number % 5 == 0) alert("Fiz");
else if (number % 3 == 0) alert("Buz");

// Task 6
let ageUser = prompt("Cколько вам лет?", 0);

if (ageUser > 18) alert("Попей пивка");
else alert("Пей колу");
if (16 <= ageUser && ageUser <= 18) {
  alert("Можешь выкурить сигаретку, только маме не говори");
}

// Task 7

for (let c = 1; c <= 5; c++) {
  let direction = prompt("В какую сторону света отправляетесь?", "куда");
  switch (direction) {
    case "юг":
      alert("на юг пойдешь счастье найдешь");
      c = 6;
      break;
    case "север":
      alert("на север пойдешь много денег найдешь");
      c = 6;
      break;
    case "запад":
      alert("на запад пойдешь верного друга найдешь");
      c = 6;
      break;
    case "восток":
      alert("на восток пойдешь разработчиком станешь");
      c = 6;
      break;
    default:
      if (c == 5) alert("Не хотите не говорите :-)");
      else alert("Что то пошло не так попробуйте ещё раз :-)");
  }
}

// Advanced
// Task 1
let nameUser = prompt("имя и фамилья", "пОлИнА нАбЕрЕжНаЯ");
nameUser = nameUser.toLowerCase();
nameUser = nameUser.split(" ", 2);
nameUser[0] = nameUser[0].charAt(0).toUpperCase() + nameUser[0].slice(1);
nameUser[1] = nameUser[1].charAt(0).toUpperCase() + nameUser[1].slice(1);
nameUser = nameUser.join(" ");
alert(`Привет ${nameUser}!`);

// Task 2
let number1 = +prompt("Введите число:", "0");
let number2 = +prompt("Сколько отнять:", "0");
let number3 = +prompt("Сколько прибавить:", "0");
let number4 = +prompt("Сколько умножить:", "0");
let number5 = +prompt("На сколько разделить:", "0");
let resultat = ((number1 - number2 + number3) * number4) / number5;
alert(
  `((${number1} - ${number2} + ${number3}) * ${number4}) / ${number5} = ${resultat}`
);

//Task 3
let ladder = "";
for (let i = 1; i <= 20; i++) {
  ladder += "#";
  console.log(ladder);
}
