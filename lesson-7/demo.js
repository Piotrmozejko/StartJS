
// пример замыкания
function secretPassword() {
    var password = 'xh38sk';
    return {
      guessPassword: function(guess) {
        if (guess === password) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  
  var passwordGame = secretPassword();
  passwordGame.guessPassword('heyisthisit?'); // false
  passwordGame.guessPassword('xh38sk'); // true






// пример что var всплывает из блока области в саммый вверх
// и как можно это рпешить при помощи замыкания
const result = [];

for (var i = 0; i < 5; i++) {
    function t(x) {
        return function() {
            console.log(i)
            console.log(x)
            console.log('-----')
        }
    }
    // result[i] = t(i)
    result[i] = (function(x) {
        return function() {
            console.log(x)
        }
    })(i)
}

for (const res of result) {
    res()
}


// пример с банкоматом
// в замыкании мы храним значение которое доступно при каждом вызове функции
const atm = function() {
    let amount = 1000;
    function terminal (amountMoney) {
        amount -= amountMoney;
        return amount >= 0 ? amountMoney : 'not money'
    }
    return terminal
}


const atm222 = atm()
const atm333 = atm()

console.log(atm222(20))
console.log(atm222(500))
console.log(atm222(80))
console.log(atm222(400))
console.log(atm222(100))



// калбеки
const arr = ['a','b','c','d','e'];

arr.forEach((value) => {
    console.log(value)
})

const res = arr.reduce((acc, value) => {
    if (acc.length === 3) {
        return acc
    }
    
    return value + acc
}, 1);

console.log()
console.log('result', res)

console.log('-----------for-----')

function forEach(array, cb) {
    for(let i =0; i < array.length; i++) {
        cb(array[i], i, array)
    }
}

function cbDeclaration (value) {
    console.log(value)
}

const cbExspression = function(value) {
    console.log(value)
}

const cbExspressionArrow = (value) => {
    console.log(value)
}

forEach(arr, (value, i, array, x) => {
    console.log('value: ', value)
    console.log('index: ', i)
    console.log('array: ', array)
    console.log('_: ', x)
    console.log()
});




// пример работы с конструкторами
function Car(model, maxSpeed,vin) {
    this.vin = vin;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.tank = 100;

    this.start = function() {
        console.log('start engine')
    }

}


function generateVin() {
    return Math.random() * 100
}


let carNew1 = new Car('speed1', 100);

let cars = Array(100).fill(null).map(() => new Car('speed1', 100, generateVin()))


let car1 = {
    model: 'speed1',
    maxSpeed: 100,
    start() {
        console.log('start engine')
    }
}

let car2 = {
    model: 'speed1',
    maxSpeed: 100,
    start() {
        console.log('start engine')
    }
}
