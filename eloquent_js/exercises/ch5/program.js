const ANCESTRY_FILE = require('./ancestry');
const ancestry = JSON.parse(ANCESTRY_FILE);

exports.flatten = array => array.reduce((prev, curr) => prev.concat(curr));

exports.some = (array, test) => {
  const anyTrue = array.map(test).filter(val => val === true);
  return anyTrue.length > 0;
};

exports.someV2 = (arr, test) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (test(arr[i])) {
      return true;
    }
  }
  return false;
};

exports.every = (array, test) => {
  const anyFalse = array.map(test).filter(val => val === false);
  return !(anyFalse.length > 0);
};

exports.everyV2 = (array, test) => {
  for (let i = 0; i < array.length; i += 1) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
};

exports.average = (array) => {
  const plus = (a, b) => a + b;
  return array.reduce(plus) / array.length;
};

const personByName = {};
ancestry.forEach((person) => {
  personByName[person.name] = person;
});

// const differencesInAge = ancestry.filter(person => personByName[person.mother] !== null)
  // .map(person => person.born - personByName[person.mother].born);

const personsWithMothers = ancestry.filter((person) => {
  return personByName[person.mother] !== undefined;
});

const differencesInAge = personsWithMothers.map((person) => {
  return person.born - personByName[person.mother].born;
});


exports.differencesInAge = differencesInAge;
