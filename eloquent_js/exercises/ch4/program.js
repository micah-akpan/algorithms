exports.range = (start, end, step) => {
  const nums = [];
  step = step || 1;

  if (step < 0) { // negative step
    step *= -1; // convert step  to a positive form
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

exports.reverseArray = (array) => {
  const output = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    output.push(array[i]);
  }
  return output;
};

exports.reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i += 1) {
    const old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }

  return array;
};


// NOTES
// reverseArray is a pure function, it adds no side effects
// instead it creates a new array and returns it.

// reverseArrayInPlace, on the other hand is
// not a pure function, it mutates the original array,
// this has a side effect

// ON Efficiency:
// reverseArrayInPlace is more efficient
