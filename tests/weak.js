var assert = require('assert'),
    WeakHash = require('../hash.js'),
    globalHash = new WeakHash(),
    obj = {};

function isWeakRefs() {
    var map = new WeakHash(),
        string = new String('test');
    map.set('test', string);
    assert.strictEqual(map.get('test'), string);
    string = null;
    global.gc();
    assert.strictEqual(map.get('test'), undefined);
    assert.equal(map.count(), 0);
    globalHash.set('isWeakRefs', map);
}

function mapIsWeak() {
    var map = new WeakHash(),
        string = new String('test');
    map.set('test', string);
    globalHash.set('mapIsWeak', map);
}

process.stdout.write('\nRunning weak tests...\n');
isWeakRefs();
mapIsWeak();

global.gc();
//make sure that isWeak map can be garbage collected
assert.equal(globalHash.count(), 0);

process.stdout.write('Passed weak assertions\n');
