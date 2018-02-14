const { expect } = require('chai');
const { Component } = require('../main');

describe('Component', () => {

    describe('Class static variables', () => {

        it('should return 1', () => {
            const comp1 = new Component(1);
            expect(Component.idStore.length).to.equal(1);
        });

        it('should return 3', () => {
            const comp3 = new Component(3);
            expect(Component.idStore[1]).to.equal(3);
        });

        it('should throw an exception', () => {
            expect(() => new Component(1)).to.throw();
        });
    });
});