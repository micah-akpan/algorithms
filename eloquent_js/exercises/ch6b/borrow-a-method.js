const map = {};

const sym = Symbol('hasOwnProperty');
map[sym] = function () {
  return 'Garbage!';
};
