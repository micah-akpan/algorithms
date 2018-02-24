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
