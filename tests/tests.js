var WeakHash = require('../hash.js');

exports.getUndefined = function(test) {
    var map = new WeakHash();
    test.strictEqual(map.get('test'), undefined);
    test.done();
};

exports.set = function(test) {
    var map = new WeakHash(),
        ref = map.set('test', new String('test'));
    test.ok(ref == 'test');
    test.strictEqual(map.get('test'), ref);
    test.done();
};

exports.getSet = function(test) {
    var map = new WeakHash(),
        ref = map.get('test', new String('test'));
    test.ok(ref == 'test');
    test.strictEqual(map.get('test'), ref);
    test.done();
};

exports.delete = function(test) {
    var map = new WeakHash(),
        ref = map.set('test', new String('test'));
    test.strictEqual(map.get('test'), ref);
    map.delete('test');
    test.strictEqual(map.get('test'), undefined);
    test.done();
};
