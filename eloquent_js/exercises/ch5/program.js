exports.flatten = array => array.reduce((prev, curr) => prev.concat(curr));

exports.some = (array, test) => {
  const anyTrue = array.map(test).filter(val => val === true);
  return anyTrue.length > 0;
};

exports.someV2 = (array, test) => {
  array.forEach((value) => {
    if (test(value)) {
      return true;
    }
  });
  return false;
};
