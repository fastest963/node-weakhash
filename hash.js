var weak = require('weak');

function getBoundRemove(weakContext, id) {
    return function() {
        var context = weak.get(weakContext);
        context.delete(id);
    };
}

function WeakHash() {
    this.map = {};
    delete this.map.a; //don't let V8 try to optimize this with hidden classes
    this.weakCtx = weak(this);
}

WeakHash.prototype.get = function(id, value) {
    if (id === undefined || typeof id === 'object') {
        throw new TypeError('Invalid id passed to WeakHash.get');
    }
    var result;
    if (this.map[id] === undefined) {
        if (value !== undefined) {
            result = this.set(id, value);
        }
    } else {
        result = weak.get(this.map[id]);
    }
    return result;
};

WeakHash.prototype.set = function(id, value) {
    if (id === undefined || typeof id === 'object') {
        throw new TypeError('Invalid id passed to WeakHash.set');
    }
    if (typeof value !== 'object') {
        throw new TypeError('Invalid object value passed to WeakHash.set');
    }
    this.map[id] = weak(value, getBoundRemove(this.weakCtx, id));
    return weak.get(this.map[id]);
};

WeakHash.prototype['delete'] = function(id) {
    if (id === undefined || typeof id === 'object') {
        throw new TypeError('Invalid id passed to WeakHash.delete');
    }
    delete this.map[id];
};

WeakHash.prototype.count = function() {
    var count = 0,
        k;
    for (k in this.map) {
        if (this.map.hasOwnProperty(k)) {
            count++;
        }
    }
    return count;
};

module.exports = WeakHash;
