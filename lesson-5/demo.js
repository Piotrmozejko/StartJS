const people = {
    name: 'Georg',
    age: 18,
    parents: {
        father: {
            name: 'Semen',
            age: 48,
        },
        mother: {
            name: 'Zoy',
            age: 38,
        }
    },
    sayName: function sayName() {
        console.log(this.name)
    },
    say(what) {
        console.log(`say ${what}`)
    }
};

let diselEngine = {
    fuel: 'disel',
}

let car1 = {
    maxSpeed: 200,
    engine: diselEngine
}

let car2 = {
    maxSpeed: 200,
    engine: diselEngine
}

let car3 = {
    maxSpeed: 100,
    engine: {
        fuel: 'gas',
    }
}

diselEngine = null;
// console.log(car1.engine)
// console.log(diselEngine)

let cars = {
    bmw: car1
}

console.log(car1.engine === car2.engine);
console.log(car2.engine.fuel)
car1.engine.fuel = 'gas'
console.log(car2.engine.fuel)
car1.engine = null
console.log(car2.engine.fuel)
car2.engine = null
console.log(car2.engine)



function summRange(a, b) {
    if (a > 0 && b === 0) {
        [a,b] = [b,a];
    }
    let sum = 0;
    for(sum = 0; a <= b; a++) {
        sum += a
    }

    return sum
}


let tests = {
    t1: {
        a: 1,
        b: 0,
        result: 1
    },
    t2: {
        a: 1, 
        b: 2, 
        result: 3
    },
    t3: {a: 0, b: 1, result: 1},
    t4: {a: 1, b: 1, result: 1},
    t5: {a: -1, b: 0, result: -1},
    t6: {a: -1, b: 2, result: 2},
  }


for(let key in tests) {
    const test = tests[key];
    const actualResult = summRange(test.a, test.b);

    console.assert(actualResult === test.result, `Test ${key} is failed, expected ${test.result} actual ${actualResult}`)
}



