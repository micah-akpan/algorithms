/**
 *
 * @constructor Vector
 * @param {number} x
 * @param {number} y
 */
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function plus(vector) {
  const x = this.x + vector.x;
  const y = this.y + vector.y;
  return new Vector(x, y);
};

Vector.prototype.minus = function minus(vector) {
  const x = this.x - vector.x;
  const y = this.y - vector.y;

  return new Vector(x, y);
};

Object.defineProperty(Vector.prototype, 'length', {
  get() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }
});

exports.vector = Vector;
