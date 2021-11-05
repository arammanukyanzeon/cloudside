
const isCreditCardNumber = str => {
    const regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(str))
        return false;
    return check(str);
}

function check(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i += 2) {
        let intVal = parseInt(str.charAt(i));
        intVal *= 2;
        if (intVal > 9) {
            intVal = 1 + (intVal % 10);
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

const result = isCreditCardNumber("6674100000000004");
console.log(result);

/////////////////////////////////////

function customReduce(callback, initialVal) {
    let accumulator = (initialVal === undefined) ? this[0] : initialVal;
    let start = (initialVal === undefined) ? 1 : 0
    for (let i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator;
};

Array.prototype.customReduce = customReduce;

const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((x, y) => x + y));
console.log(arr.customReduce((x, y) => x + y));
console.log(arr.customReduce((x, y) => x + y, 0));

/////////////////////////////////////////

function sum(a) {
    return function (b) {
        return a + b;
    }
}

const result1 = sum(1)(2);
console.log(result1);