/**
 * Task 1 👨‍🏫

    Написать функцию конструктор Student

    В каждом объекте студента должны быть поля salary , rate , name

    Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.

    На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

    Создать массив students и поместить в него студентов.

    Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

rate имеет 4 категории A B C D

    A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
    B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
    C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
    D - плохой рейтинг и мы не можем дать кредит
 */

const rateCollection = {
    A: 12,
    B: 9,
    C: 6,
    D: null
}

function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;

    this.getCreditSummary = function() {
        const availabelRating = rateCollection[this.rate];

        return availabelRating ? this.salary * availabelRating : 0;
    }
}

console.log(new Student('Alex', 200, 'A'))

const students = [
    new Student('Alex', 200, 'A'),
    new Student('Georg', 400, 'B'),
    new Student('Gena', 2050, 'C'),
    new Student('Anna', 1400, 'D'),
    new Student('Olga', 100, 'E'),
];

const totlaSumm = students.reduce((acc, student) => acc += student.getCreditSummary(), 0);

const totlaSumm2 = students.reduce(function(acc, student) {
    return acc += student.getCreditSummary()
}, 0);

// console.log(totlaSumm);


/**
 * Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

    Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
    Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
    Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

    Примечание: для этой задачи y не считается гласной.
 */

// вариант 1
const str = 'This website LOL is for losers LOL!';
const expectedStr = 'Ths wbst s fr lsrs LL!';

const result = str.replace(/[aioue]/gi, '');

console.log(result)

// вариант 2
const consonants = ['a', 'i', 'o', 'u', 'e',];

const arrStr = str.split('');
const result2 = arrStr.filter(function(char) {
    return !consonants.includes(char.toLocaleLowerCase())
});

console.log(result2.join(''));