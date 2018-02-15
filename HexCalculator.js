/**
 * @params {int} n
 * returns the decimal equivalent of the hexadecimal n
*/

const hexToDecimal = (n) => {
  const hexdec = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };

  let result = 0;
  const nItems = n.length;

  const BASE = 16;

  n.toUpperCase().split('').forEach((val, idx) => {
    // idx becomes idx + 1, starting at 1 instead of 0,
    result += hexdec[val] * (BASE ** (nItems - (idx + 1)));
  });

  return result;
};

const decToHex = (dec) => {
  const baseValue = 16;
  return dec.toString(baseValue);
};

module.exports.hexToDecimal = hexToDecimal;
module.exports.decToHex = decToHex;
