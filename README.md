# WeakHash #

Unlike a [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap),
a WeakHash accepts a primitive value as the key.

Utilizes [node-weak](https://github.com/TooTallNate/node-weak) for weak references.

## Docs ##

### new WeakHash() ###
Creates a new empty WeakHash.

### hash.get(id [,value]) ###
Returns the stored value for `id`. If `id` is not found and `value` is passed, `value` be stored for `id`.

### hash.set(id, value) ###
Stores `value` for `id`.

### hash.delete(id) ###
Delete value stored for `id`.


By [James Hartig](https://github.com/fastest963/)
