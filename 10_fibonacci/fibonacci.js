const fibonacci = function(num) {
  let number = Number(num);
  if (number == 0) return 0;
  if (number < 0) return "OOPS";

  let fib = [0, 1];

  for (let i = 2; i <= number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
