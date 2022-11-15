// First In First Out

// LIFO - last in first out 

const queueOrder = {
    _queue: [],
    enqueue(value) {
        this._queue.push(value)
    },
    dequeue() {
        return this._queue.shift();
    }
}

// queueOrder.enqueue({id: 2, description: 'coffee'})
// queueOrder.enqueue({id: 1, description: 'margarita'})
// console.log(queueOrder._queue)
// console.log('----')
// console.log(queueOrder.dequeue())
// console.log(queueOrder.dequeue())
// console.log('----')
// console.log(queueOrder._queue)




const userNames = ['Gena', 'Georg', 'Pety', 'Alex'];

for(let i = 0; i < userNames.length; i++) {
    console.log(userNames[i])
}

for (const key in userNames) {
    console.log(key)
}

for (const key in userNames) {
    console.log(userNames[key])
}

for (const value of userNames) {
    console.log(value)
}

userNames.forEach(function(element) {
    console.log(`element ${element}`);
    console.log('---')
})