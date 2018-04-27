const { equals } = require('../../../main');

/**
 * Models the 'Set' data structure
 * @class
 */
class Group {
  /**
   * @constructor
   */
  constructor() {
    this.group = [];
  }

  /**
   * @method add
   * @param {*} value
   * @return {Group} - Returns an instance of group
   */
  add(value) {
    if (this.group.length === 0) {
      this.group.push(value);
    } else {
      for (const x of this.group) {
        if (x === value) {
          return this;
        }
      }

      this.group.push(value);
      return this;
    }
  }

  /**
   * @method delete
   * @param {*} value
   * @return {Boolean} - Returns true if 'value' was successfully deleted, false otherwise
   */
  delete(value) {
    for (const [index, val] of Object.entries(this.group)) {
      if (val === value) {
        this.group.splice(index, 1);
        return true;
      }
    }

    return false;
  }

  /**
   * @method has
   * @param {*} value
   * @return {Boolean} - Returns true if 'value' is in 'Group', false otherwise
   */
  has(value) {
    if ('object' === typeof value) {
      for (const el of this.group) {
        if (equals(el, value)) return true;
      }
    } else {
      // const idx = this.group.indexOf(value);
      // if (idx in this.group) {
      //   return true;
      // }
      if (this.group.includes(value)) {
        return true;
      }
    }

    return false;
  }

  /**
   * @static
   * @param {Iterable} iterable
   * @return {Group} - A new group formed from 'iterable'
   */
  static from(iterable) {
    const group = new Group();
    for (const x of iterable) {
      group.add(x);
    }

    return group;
  }
}

module.exports = Group;
