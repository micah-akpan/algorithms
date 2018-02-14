const { expect } = require('chai');
const { Component } = require('../main');

describe('Component', () => {

    describe('Class static variables', () => {

        it('should return 1', () => {
            const comp1 = new Component(1);
            expect(Component.idStore.length).to.equal(1);
        });
    });
});