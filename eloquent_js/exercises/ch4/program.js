exports.range = (start, end) => {
  const nums = [];
  for (let i = start; i <= end; i += 1) {
    nums.push(i);
  }
};


exports.sum = (array) => {
  let result = 0;
  array.forEach((num) => {
    result += num;
  });

  return result;
};
