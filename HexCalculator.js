/**
 * @params {int} n
 * returns the decimal equivalent of the hexadecimal n
*/

function hexToDecimal(n) {

  let hexdec = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
    '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
  };

  let result = 0,
      i = 1;

  const BASE = 16;

  n.toUpperCase().split("").forEach((val) => {
    result += hexdec[val] * (Math.pow(BASE, n.length-i));
    i++;
  });

  return result;
}

const decToHex = function(dec) {
  const baseValue = 16;
  return dec.toString(baseValue);
}

module.exports.hexToDecimal = hexToDecimal;
module.exports.decToHex = decToHex;
