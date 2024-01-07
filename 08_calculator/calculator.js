const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
};

const multiply = function (arr) {
  let sum = 0;
  arr.forEach((value, index) => {
    if (index === 0) {
      sum = value;
    } else {
      sum *= value;
    }
  });
  return sum;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  } else if (number === 1) {
    return 1;
  }

  let arr = [];
  while (number !== 1) {
    arr.push(number);
    number--;
  }

  return multiply(arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
