const precent = 0.25;
const distance = 4125;

const miles = distance * precent;

console.log(`За полет в Иркутск получили ${miles} миль`);

function getPercent (distance) {
    const basePrecent = 0.25;
    const extraPrice = 0.35;

    return distance > 10000 ? basePrecent : extraPrice;
}

function calculateMiles(distance) {
    if (!(typeof distance === 'number')) {
        return `distance should be number`
    }

    const precent = getPercent(distance);

    const miles = distance * precent;

    console.log(`За полет в Камчатки получили ${miles} миль`);
}


var showTime = function (hours, minutes ) {
    console.log(arguments)
    hours = 20;
    console.log(`Curent time: ${hours}:${minutes}`)
}

showTime(21, 15, 11, 'sdsd', true, {});


const summaryOld = function(a) {
    return a + 10;
}

const summary = (a, b) => {
    return a + b;
}

console.log(summary(10, 20))

