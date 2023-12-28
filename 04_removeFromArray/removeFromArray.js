const removeFromArray = function (arrayValues, ...args) {
  for (let x = 0; x < args.length; x++) {
    if (arrayValues.includes(args[x])) {
      let valueIndex = arrayValues.indexOf(args[x]);
      arrayValues.splice(valueIndex, 1);
    }
  }
  return arrayValues;
};

// Do not edit below this line
module.exports = removeFromArray;
