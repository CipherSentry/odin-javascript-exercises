const sumAll = function(num1, num2) {
    let numArray = [];
    let total = 0;

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }else if (Math.floor(num1) != num1 || Math.floor(num2) != num2) {
        return 'ERROR';
    }else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR';
    }

    if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            numArray.push(i);
        }
    }else {
        for (i = num2; i <= num1; i++) {
            numArray.push(i);
        }
    }

    for (i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
