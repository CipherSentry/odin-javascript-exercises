const palindromes = function (string) {
//.replaceAll(/[^A-Za-z0-9]/g,"")
    let cleanString = string.replaceAll(/[^A-Za-z0-9]/g,"").toLowerCase();
    let reversedString = cleanString.split("").reverse().join("");
    let result = cleanString == reversedString;
    
    return result;
};

// Do not edit below this line
module.exports = palindromes;
