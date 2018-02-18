const { expect } = require('chai');
const { isEven, countBs, countBs1 } = require('../eloquent_js/exercises/ch3/program');

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