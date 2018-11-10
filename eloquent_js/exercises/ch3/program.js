/**
 * @function isEven
 * @param {Number} number
 * @return {Boolean}
 * Returns true if a number is even, false otherwise
 */
const isEven = (number) => {
  if (number === 0) return true;
  else if (number === 1) return false;
  return isEven(number - 2);
};

/**
 * @function countChar
 * @param {String} string
 * @param {String} char
 * @returns {Number}
 * Returns the number of 'char' found in 'string'
 */
const countChar = (string, char) => {
  let numOfChars = 0;
  const n = string.length;

  for (let i = 0; i < n; i += 1) {
    if (string.charAt(i) === char) {
      numOfChars += 1;
    }
  }
  return numOfChars;
};

/**
 * @function countBs
 * @param {String} string
 * @return {Number}
 * Returns the number of 'B' found in string
 */
const countBs = string => countChar(string, 'B');

/**
 * @function countBs1
 * @param {String} string
 * @return {Number}
 * Returns the number of 'B's found in string
 */
const countBs1 = (string) => {
  const allBs = string.split('').filter((str, idx) => string.charAt(idx) === 'B');
  return allBs.length;
};

module.exports = {
  isEven,
  countBs,
  countBs1
};
