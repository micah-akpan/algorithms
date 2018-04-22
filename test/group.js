const { expect } = require('chai');
const { equals } = require('../main');
const Group = require('../eloquent_js/exercises/ch6b/group');

describe('Chapter 6 - 3rd Edition', () => {
  describe('Group', () => {
    let aGroup = null;

    before(() => {
      aGroup = new Group();
    });

    it('should return a new instance', () => {
      expect(aGroup instanceof Group).to.equal(true);
      expect(aGroup).to.have.property('group');
      expect(aGroup.group).to.be.an('array');
    });

    it('can add new elements', () => {
      aGroup.add('JavaScript');
      expect(aGroup.group).to.have.lengthOf(1);
    });

    it('can discard duplicate elements', () => {
      aGroup.add('JavaScript');
      aGroup.add('JavaScript');
      expect(aGroup.group).to.have.lengthOf(1);
    });

    it('can add new unique elements', () => {
      aGroup.add('JavaScript');
      aGroup.add(1);
      aGroup.add({ name: 'Julia' });
      expect(aGroup.group).to.have.lengthOf(3);
    });

    it('can remove existing elements', () => {
      aGroup.delete('JavaScript');
      expect(aGroup.group).to.have.lengthOf(2);
    });

    it('can test for the presence/absence of elements', () => {
      expect(aGroup.has('JavaScript')).to.equal(false);
    });

    it('can test for the presence/absence of elements', () => {
      expect(aGroup.has(1)).to.equal(true);
    });

    it('can test for the presence/absence of elements', () => {
      expect(aGroup.has({ name: 'Julia' })).to.equal(true);
    });

    it('should return true for removing an element', () => {
      expect(aGroup.delete(1)).to.equal(true);
    });

    it('should return false for removing non-existent element', () => {
      expect(aGroup.delete('4')).to.equal(false);
    });

    it('should return a new Group instance from an iterable', () => {
      const newGroup = Group.from([3, 'Silicon Valley', 'Micah', [2, 3]]);
      expect(newGroup instanceof Group).to.equal(true);
      expect(newGroup.group).have.lengthOf(4);
    });
  });
});
