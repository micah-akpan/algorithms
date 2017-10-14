function hexToDecimal(n) {
  // (str) -> (int)
  // returns the decimal equivalent of the hexadecimal n
  var mapping = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
    '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
  };
  var result = 0;
  var i = 1;

  var len = n.length;
  n.toUpperCase().split("").forEach(function(val) {
    result += mapping[val] * (Math.pow(16, len-i));
    i++;
  });

  return result;
}

// console.log(hexToDecimal("8ea7c2"));
module.exports.hexToDecimal = hexToDecimal;
