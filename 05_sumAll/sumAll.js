const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  let start = num1 < num2 ? num1 : num2; 
  let end = num1 > num2 ? num1 : num2;
  let sum = start;

  for (let i = start; i < end; i++) {
    sum += i + 1;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
