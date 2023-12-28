const sumAll = function (numOne, numTwo) {
  let sum = 0;
  // change this after food i believe it is causing error
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "ERROR";
  } else if (numOne < 0 || numTwo < 0) {
    return "ERROR";
  }

  if (numOne < numTwo) {
    for (numOne; numOne !== numTwo + 1; numOne++) {
      sum += numOne;
    }
  } else {
    for (numTwo; numTwo !== numOne + 1; numTwo++) {
      sum += numTwo;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
