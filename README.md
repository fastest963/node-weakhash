# WeakHash #

Unlike a WeakMap, a WeakHash accepts a primitive value as the key.

## Docs ##

### new WeakHash() ###
Creates a new WeakHash for objects.

### hash.get(id [,value]) ###
Returns the stored value for `id`. If `id` is not found and `value` is passed, `value` be stored for `id`.

### hash.set(id, value) ###
Stores `value` for `id`.

### hash.delete(id) ###
Delete value stored for `id`.


By [James Hartig](https://github.com/fastest963/)
