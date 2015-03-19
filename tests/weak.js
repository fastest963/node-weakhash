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
}
isWeak();
