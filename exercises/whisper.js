'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = string => "*" + string.toLowerCase() + "*"


//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper("CECI EST UN TEST"), "*ceci est un test*");
assert.deepStrictEqual(whisper("Et un Second Test"), "*et un second test*");

//assert.fail('You must write your own tests');
// End of tests */
