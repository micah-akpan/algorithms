
/**
 * @class Vec
 */
class Vec {
  /**
   * @constructor
   * @param {Number} x
   * @param {Number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @method plus
   * @param {Vec} vec
   * @return {Vec} - A new Vec
   */
  plus(vec) {
    const vector = new Vec(this.x + vec.x, this.y + vec.y);
    return vector;
  }

  /**
   * @method minus
   * @param {Vec} vec
   * @return {Vec} - A new Vec
   */
  minus(vec) {
    const vector = new Vec(this.x - vec.x, this.y - vec.y);
    return vector;
  }

  /**
   * A getter
   * @return {Number} - The distance of the vector from origin (0, 0)
   */
  get length() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }

  /**
   * A factory static method
   * @static
   * @param {Number} x
   * @param {Number} y
   * @return {Vec} - Returns a new Vec instance
   */
  static createVector(x, y) {
    return new Vec(x, y);
  }
}
