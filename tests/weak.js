var assert = require('assert'),
    WeakHash = require('../hash.js'),
    obj = {};

function isWeak() {
    var map = new WeakHash(),
        string = new String('test');
    map.set('test', string);
    assert.strictEqual(map.get('test'), string);
    string = null;
    global.gc();
    assert.strictEqual(map.get('test'), undefined);
    assert.equal(map.count(), 0);
    process.stdout.write('Passed 3 assertions\n');
}
process.stdout.write('\nRunning weak tests...\n');
isWeak();
