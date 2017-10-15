function hexToDecimal(n) {
  /*
   * (str) -> int
   * returns the decimal equivalent of the hexadecimal n
   */

  let hexdec = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
    '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
  };

  let result = 0;
  let i = 1;
  const BASE = 16;

  n.toUpperCase().split("").forEach(function(val) {
    result += hexdec[val] * (Math.pow(BASE, n.length-i));
    i++;
  });

  return result;
}

module.exports.hexToDecimal = hexToDecimal;
