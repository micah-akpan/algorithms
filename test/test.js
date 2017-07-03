const assert = require('chai').assert;
const mainApp = require('../main.js')

describe("getPrimes", function() {

	describe("handle valid input of n", function () {
	it("should return primes numbers from 0 to n", function() {
		assert.deepEqual(mainApp.getPrimes(10), [2, 3, 5, 7]);
	});
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

   describe("handle empty input", function() {
   	it ("should return undefined when given an empty input", function() {
   		assert.equal(mainApp.getPrimes(''), 'undefined');
   	})
   })
})