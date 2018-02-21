exports.range = (start, end, step) => {
  const nums = [];
  step = step || 1;

  if (step < 0) { // negative step
    step *= step; // convert step  to a positive form
    for (let i = start; i >= end; i -= step) {
      nums.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      nums.push(i);
    }
  }
  return nums;
};


exports.sum = (array) => {
  let result = 0;
  array.forEach((num) => {
    result += num;
  });

  return result;
};


