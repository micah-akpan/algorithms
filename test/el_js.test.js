const { expect, assert } = require('chai');
const { isEven, countBs, countBs1 } = require('../eloquent_js/exercises/ch3/program');
const { range, sum, reverseArray } = require('../eloquent_js/exercises/ch4/program');

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
});
