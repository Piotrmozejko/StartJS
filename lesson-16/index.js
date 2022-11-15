function Budget(amount, daysCount) {
    this.amount = amount;
    this.daysCount = daysCount;
    this.startDate = new Date();
}

Budget.prototype = {
    constructor: Budget,
    get valueOf() {
        return this.amount/this.daysCount;
    }
}

function History() {
    this._records = [];
}

History.prototype = {
    constructor: History,
    addRecord(record) {
        this._records.push(record);
    },
    getSpentToday() {
        return this._records.reduce((summ, record) => {
            return summ += isToday(record.date) ? record.amount : 0;
        }, 0)
    }
}


function Record(amount, description) {
    this.amount = amount;
    this.description = description;
    this.date = new Date();
}

function isToday(date) {
    return new Date().getDate() === date.getDate();
}


function DayliAmount(budget, history) {
    this.budget = budget;
    this.history = history;
}

DayliAmount.prototype = {
    constructor: DayliAmount,

    getAvailabelAmount() {
        return this.budget.valueOf - this.history.getSpentToday()
    }
}


const budget = new Budget(1000, 2);
const history = new History();
const daily = new DayliAmount(budget, history);

