const { assert, expect } = require('chai');
const {
  getPrimes, isComposite, parseCreditCard, parseCreditCard2,
  findPower
} = require('../main');
const { extendObj, equals } = require('../main');
const { hexToDecimal, decToHex } = require('../HexCalculator');


describe('Utility functions', () => {
  describe('getPrimes', () => {
    describe('handle valid input of n', () => {
      it('should return prime numbers from 0 to n', () => {
        assert.deepEqual(getPrimes(10), [2, 3, 5, 7]);
      });
    });

    describe('handle valid input of n', () => {
      it('should return prime numbers from 0 to n', () => {
        assert.deepEqual(getPrimes(20), [2, 3, 5, 7, 11, 13, 17, 19]);
      });
    });


    describe('handle valid input of n', () => {
      it('should return prime numbers from 0 to n', () => {
        assert.deepEqual(getPrimes(40), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      });
    });


    describe('handle valid input of n', () => {
      it('should return prime numbers from 0 to n', () => {
        assert.deepEqual(getPrimes(50), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
      });
    });

    describe('handle negative values', () => {
      it('should return undefined when given a negative value for n', () => {
        assert.equal(getPrimes(-4), 'undefined');
      });
    });


    describe('handle string values', () => {
      it('should return undefined when given a string', () => {
        assert.equal(getPrimes('hello'), 'undefined');
      });
    });

    describe('handle non-integer(float) values', () => {
      it('should return undefined when given a float', () => {
        assert.equal(getPrimes(4.5), 'undefined');
      });
    });

    describe('handle the input n -> 1', () => {
      it('should return undefined when given n = 1', () => {
        assert.equal(getPrimes(1), 'undefined');
      });
    });

    describe('handle the input n -> 0', () => {
      it('should return undefined when given n = 0', () => {
        assert.equal(getPrimes(0), 'undefined');
      });
    });

    describe('handle empty input', () => {
      it('should return undefined when given an empty input', () => {
        assert.equal(getPrimes(''), 'undefined');
      });
    });
  });

  describe('hexToDecimal', () => {
    describe('handle valid inputs of n', () => {
      it('should return 90 for the decimal equivalent of 5a', () => {
        assert.equal(hexToDecimal('5a'), 90);
      });

      it('should return 142 for the decimal equivalent of 8e', () => {
        assert.equal(hexToDecimal('8e'), 142);
      });

      it('should return 9349058 for the decimal equivalent of 8ea7c2', () => {
        assert.equal(hexToDecimal('8ea7c2'), 9349058);
      });

      it('should return 0 for the decimal equivalent of 0', () => {
        assert.equal(hexToDecimal('0'), 0);
      });

      it('should return a for the hexadecimal equivalent of 10', () => {
        assert.equal(decToHex(10), 'a');
      });
    });
  });


  describe('Composite numbers', () => {
    describe('handle valid inputs', () => {
      it('should return true when given 6 as input', () => {
        assert.equal(isComposite(6), true);
      });

      it('should return true when given 8 as input', () => {
        assert.equal(isComposite(8), true);
      });

      it('should return false when given 3 as input', () => {
        assert.equal(isComposite(3), false);
      });

      it('should return false when given 5 as input', () => {
        assert.equal(isComposite(5), false);
      });

      it('should return true when given 10 as input', () => {
        assert.equal(isComposite(10), true);
      });

      it('should return false when given 13 as input', () => {
        assert.equal(isComposite(13), false);
      });
    });

    describe('handle invalid inputs', () => {
      it('should return a descriptive error message when given a string as input', () => {
        assert.equal(isComposite('stupid'), 'only integer inputs are allowed');
      });
    });
  });

  describe('Extend Objects feature', () => {
    describe('handle valid object input', () => {
      it('should return an extended first object', () => {
        assert.deepEqual(extendObj({ name: 'Sam' }, { name: 'Rebecca' }), { name: 'Rebecca' });
      });

      it('should return an extended object with a first object', () => {
        assert.deepEqual(extendObj(
          { name: 'Koffi' },
          { name: 'Koffi', profession: 'Wrestling' }
        ), { name: 'Koffi', profession: 'Wrestling' });
      });

      it('should return an extended object given first empty object input', () => {
        assert.deepEqual(extendObj({}, { name: 'Ekanem' }, { age: 94 }), { name: 'Ekanem', age: 94 });
      });
    });
  });


  describe('object contents equality', () => {
    describe('test for equality', () => {
      it('should return true if both objects contain same members (similar)', () => {
        const myObj1 = { id: 1, place: 'school' };
        const myObj2 = { id: 1, place: 'school' };
        assert.equal(equals(myObj1, myObj2), true);
      });

      it('should return false if both objects contain dissimilar members', () => {
        const myObj1 = { id: 1, place: 'school' };
        const myObj2 = { id: 2, place: 'school' };
        assert.equal(equals(myObj1, myObj2), false);
      });

      it('should return false if both objects contain dissimilar members', () => {
        const myObj1 = { id: 1, place: 'school' };
        const myObj2 = { id: 1, place: 'library' };
        assert.equal(equals(myObj1, myObj2), false);
      });
    });
  });

  describe('Credit Card numbers fix', () => {
    describe('handle valid inputs', () => {
      it('should return a well-formatted credit card number', () => {
        assert.equal(parseCreditCard('3412565751233768'), '3412-5657-5123-3768');
      });

      it('should return a well-formatted credit card number', () => {
        assert.equal(parseCreditCard2('5632124576887876'), '5632-1245-7688-7876');
      });

      it('should throw an exception', () => {
        expect(() => parseCreditCard('329129204399713489329341834')).to.throw(Error);
      });

      it('should throw an exception', () => {
        expect(() => parseCreditCard('0000')).to.throw(Error);
      });

      it('should not throw an exception', () => {
        expect(() => parseCreditCard('7219456734562018')).to.not.throw(Error);
      });

      it('should return a well-formatted credit card number', () => {
        expect(parseCreditCard(1234890312348766)).to.equal('1234-8903-1234-8766');
      });
    });
  });

  describe('#findPower()', () => {
    it('should return the power for a number', () => {
      expect(findPower(65536, 2, 1)).to.equal(16);
    });

    it('should return the power for a number', () => {
      expect(findPower(32, 2, 1)).to.equal(5);
    });

    it('should return the power for a number', () => {
      expect(findPower(128, 2, 1)).to.equal(7);
    });

    it('should return the power for a number', () => {
      expect(findPower(9, 3, 1)).to.equal(2);
    });

    it('should return the power for a number', () => {
      expect(findPower(25, 5, 1)).to.equal(2);
    });
  });
});
