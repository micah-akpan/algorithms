const { expect, assert } = require('chai');
const { isEven, countBs, countBs1 } = require('../eloquent_js/exercises/ch3/program');
const { range, sum, reverseArray, reverseArrayInPlace } = require('../eloquent_js/exercises/ch4/program');
const { arrayToList, listToArray, prepend, nth } = require('../eloquent_js/exercises/ch4/program');

const { flatten, some, someV2, every, everyV2 } = require('../eloquent_js/exercises/ch5/program');

describe('Chapter 3 Exercises Test', () => {
  describe('Test for Even numbers', () => {
    describe('handle valid input', () => {
      it('should return false for an input of 19', () => {
        expect(isEven(19)).to.equal(false);
      });

      it('should return true for an input of 22', () => {
        expect(isEven(22)).to.equal(true);
      });
    });
  });

  describe('Test for countBs', () => {
    it('should return 2 for the value of total Bs in the given string input', () => {
      const str = 'My Bass guitar has a fine Baritone timbre';
      expect(countBs(str)).to.equal(2);
    });

    it('should return 2 for the value of total Bs in the given string input', () => {
      const str = 'My Bass guitar has a fine Baritone timbre';
      expect(countBs1(str)).to.equal(2);
    });
  });
});

describe('Chapter 4 Exercises Test', () => {
  describe('Sum of Array values test', () => {
    describe('handle valid array input', () => {
      it('should return 55 for the sum of all values in the array', () => {
        expect(sum(range(1, 10))).to.equal(55);
      });
    });
  });

  describe('Range Test', () => {
    describe('handle valid inputs', () => {
      it('should return [1, 3, 5, 7, 9] for inputs (1, 10, 2)', () => {
        assert.deepEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
      });

      it('should return [5, 4, 3, 2] for inputs (5, 2, -1)', () => {
        assert.deepEqual(range(5, 2, -1), [5, 4, 3, 2]);
      });
    });
  });

  describe('Reverse Array (Out of place)', () => {
    describe('handle valid array input', () => {
      it('should return [9, 7, 5, 3, 1] for inputs [1, 3, 5, 7, 9]', () => {
        assert.deepEqual(reverseArray([1, 3, 5, 7, 9]), [9, 7, 5, 3, 1]);
      });
    });
  });

  describe('ReverseArray (In Place)', () => {
    describe('handle valid array input', () => {
      it('should return [9, 7, 5, 3, 1] for inputs [1, 3, 5, 7, 9]', () => {
        assert.deepEqual(reverseArrayInPlace([1, 3, 5, 7, 9]), [9, 7, 5, 3, 1]);
      });
    });
  });

  describe('ArrayToList', () => {
    describe('handle valid array input', () => {
      it('should return a list', () => {
        assert.deepEqual(arrayToList([1, 2, 3]), {
          result: 1,
          rest: {
            result: 2,
            rest: {
              result: 3,
              rest: null
            }
          }
        });
      });
    });
  });

  describe('ListToArray', () => {
    describe('handle valid array input', () => {
      it('should return an array', () => {
        assert.deepEqual(listToArray({
          result: 1,
          rest: {
            result: 2,
            rest: {
              result: 3,
              rest: null
            }
          }
        }), [1, 2, 3]);
      });
    });
  });

  describe('prepend', () => {
    describe('handle valid inputs', () => {
      assert.deepEqual(prepend(1, {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }), {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
      });
    });
  });

  describe('nth', () => {
    it('should return the nth element in the list', () => {
      expect(nth(2, {
        value: 20,
        rest: {
          value: 30,
          rest: {
            value: 45,
            rest: null
          }
        }
      })).to.equal(45);
    });
  });

  describe('nth', () => {
    it('should return undefined if given a null list', () => {
      expect(nth(1, null)).to.equal(undefined);
    })
  })
});

describe('Chapter 5 Test', () => {
  describe('Flatten an array test', () => {
    describe('handle valid array input', () => {
      it('should return a flattened array from a multi-dimensional array input', () => {
        assert.deepEqual(flatten([[1, 3], [4, 6]]), [1, 3, 4, 6]);
      });
    });
  });

  describe('Some test', () => {
    describe('handle valid array input', () => {
      it('should return true if any element in the array is odd', () => {
        expect(some([6, 8, 7], num => num % 2 !== 0)).to.equal(true);
      });

      it('should return false', () => {
        expect(some([3, 5, 1], num => num % 2 === 0)).to.equal(false);
      });
    });
  });

  describe('Some v2 test', () => {
    describe('handle valid array input', () => {
      it('should return true', () => {
        expect(someV2([6, 8, 7], num => num % 2 !== 0)).to.equal(true);
      });

      it('should return false', () => {
        expect(someV2([3, 5, 1], num => num % 2 === 0)).to.equal(false);
      });
    });
  });

  describe('Every test', () => {
    describe('handle valid array input', () => {
      it('should return false', () => {
        expect(every([6, 8, 7], num => num % 2 === 0)).to.equal(false);
      });

      it('should return true', () => {
        expect(everyV2([3, 5, 1], num => num % 2 !== 0)).to.equal(true);
      });
    });
  });

  describe('Every v2 Test', () => {
    describe('handle valid array input', () => {
      it('should return true', () => {
        expect(everyV2([3, 5, 1], num => num % 2 !== 0)).to.equal(true);
      });

      it('should return false', () => {
        expect(everyV2([6, 8, 7], num => num % 2 === 0)).to.equal(false);
      });
    });
  });
});
