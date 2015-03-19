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

exports.setTwice = function(test) {
    var map = new WeakHash(),
        test1 = new String('test'),
        test2 = new String('test2'),
        ref = map.set('test', test1);
    ref = map.set('test', test2);
    test.ok(ref == 'test2');
    test.strictEqual(map.get('test'), test2);
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
