const palindromes = function (word) {
  const parsedWord = word.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  const reversedWord = parsedWord.split("").reverse().join("");
  return parsedWord == reversedWord ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
