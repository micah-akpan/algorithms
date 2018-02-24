exports.flatten = array => array.reduce((prev, curr) => prev.concat(curr));

exports.some = (array, test) => {
  const newArr = array.map(test);
  const anyTrue = newArr.filter(val => val === true);
  return anyTrue.length > 0;
};
