const reverseString = function(string) {
    const input = string;
    let output = "";

    for (i = input.length - 1; i >= 0; i--) {
        output += input.at(i);
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
