const assert = require('chai').assert;
const mainApp = require('../main.js')

describe("getPrimes", function() {

	describe("handle valid input of n", function () {
	it("should return prime numbers from 0 to n", function() {
		assert.deepEqual(mainApp.getPrimes(10), [2, 3, 5, 7]);
	});
 })

   describe("handle valid input of n", function() {
      it ("should return prime numbers from 0 to n", function() {
         assert.deepEqual(mainApp.getPrimes(20), [2, 3, 5, 7, 11, 13, 17, 19]);
      });
   })


   describe("handle valid input of n", function() {
      it ("should return prime numbers from 0 to n", function() {
         assert.deepEqual(mainApp.getPrimes(40), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37])
      });
   })


   describe("handle valid input of n", function() {
      it ("should return prime numbers from 0 to n", function () {
         assert.deepEqual(mainApp.getPrimes(50), [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
      })
   })

   describe("handle negative values", function() {
   	 it ("should return undefined when given a negative value for n", function() {
   	 	assert.equal(mainApp.getPrimes(-4), 'undefined');
   	 });
   })



   describe("handle string values", function() {
   	 it("should return undefined when given a string", function() {
   	 	assert.equal(mainApp.getPrimes('hello'), 'undefined');
   	 });
   })

   describe("handle non-integer(float) values", function() {
   	 it("should return undefined when given a float", function() {
   	 	assert.equal(mainApp.getPrimes(4.5), 'undefined');
   	 });
   })

   describe("handle the input n -> 1", function() {
      it ("should return undefined when given n = 1", function () {
         assert.equal(mainApp.getPrimes(1), 'undefined');
      });
   })

   describe("handle the input n -> 0", function() {
      it ("should return undefined when given n = 0", function () {
         assert.equal(mainApp.getPrimes(0), 'undefined');
      })
   })

   describe("handle empty input", function() {
   	it ("should return undefined when given an empty input", function() {
   		assert.equal(mainApp.getPrimes(''), 'undefined');
   	})
   })
})