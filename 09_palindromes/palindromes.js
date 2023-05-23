const palindromes = function (string) {

const process = string.toLowerCase().replace(/([^a-z])/g)
return process.split("").reverse().join("") === process

};

// Do not edit below this line
module.exports = palindromes;
