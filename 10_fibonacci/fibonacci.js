const fibonacci = function (number) {
  if (typeof number == "string") {
    number = Number(number);
  }
  if (number < 0) {
    return "OOPS";
  } else if (number === 0 || number === 1) {
    return number;
  }
  // fibonacci - the number is the result of the two preceding numbers results.
  // it always start with 0, 1, 1 as 0 1st 2nds numbers.
  // 3rd number would equal 1 + 1 = 2

  // starting the fibonacci sequence
  let fibonacciArr = [0, 1, 1];

  while (fibonacciArr.length - 2 !== number) {
    fibonacciArr.push(
      fibonacciArr[fibonacciArr.length - 2] +
        fibonacciArr[fibonacciArr.length - 1]
    );
  }
  return fibonacciArr[number];
};

// Do not edit below this line
module.exports = fibonacci;
