const findTheOldest = function (personArr) {
  personArr.currentYear = 2024;

  // stores born and death years if applicable, otherwise set death year to 2024 to suggest still alive.

  let storedYears = [
    personArr.map((obj) => obj.yearOfBirth),
    personArr.map((obj) => {
      if (typeof obj.yearOfDeath == "undefined") {
        return personArr.currentYear;
      } else {
        return obj.yearOfDeath;
      }
    }),
  ];

  // store ages(death year - born year)
  let ages = [];
  storedYears[1].forEach((year) => {
    ages.push(year);
  });
  ages.forEach((year, index) => {
    ages.splice(index, 1, year - storedYears[0][index]);
  });

  /** The ages are ordered by when they were called, so just monitor index of age array and return
   * the index as the object of object index to get the person who is eldest.
   */
  let greatest;
  let indexOfGreatest;
  for (var i = 0; i < ages.length; i++) {
    if (!greatest || ages[i] > greatest) {
      greatest = ages[i];
      indexOfGreatest = i;
    }
  }
  return personArr[indexOfGreatest];
};

// Do not edit below this line
module.exports = findTheOldest;
