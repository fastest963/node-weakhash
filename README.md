# WeakHash #

Unlike a [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap),
a WeakHash requires a primitive value as the key and an object as the value.

Utilizes [node-weak](https://github.com/TooTallNate/node-weak) for weak references. Therefore this will **not** work in
browsers.

## Usage ##

```
var WeakHash = require('weakhash');
var hash = new WeakHash();
hash.set('testArr', []);
hash.get('testArr'); //returns []
```

## Docs ##

### new WeakHash() ###
Creates a new empty WeakHash.

### hash.get(id [,value]) ###
Returns the stored value for `id`. If `id` is not found and `value` is passed, `value` be stored for `id`.

`id` must be a primitive and `value` must be an object.

### hash.set(id, value) ###
Stores `value` for `id`. `id` must be a primitive and `value` must be an object.

### hash.delete(id) ###
Delete value stored for `id`. `id` must be a primitive.

### hash.count() ###
Returns the number of elements in the hash.


By [James Hartig](https://github.com/fastest963/)
