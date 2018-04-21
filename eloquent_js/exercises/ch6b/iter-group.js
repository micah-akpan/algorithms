const Group = require('./group');

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.iterIdx = 0;
    }

    next() {
        if (this.iterIdx == this.group.group.length) {
            return { done: true };
        }

        this.iterIdx++;
        let idx = this.iterIdx;

        let value = {
            [idx]: this.group.group[idx]
        };

        return {
            value, done: false
        }
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}