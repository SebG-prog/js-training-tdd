'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = string => string.toUpperCase() 


//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell("ceci est un test"), "CECI EST UN TEST");

//assert.fail('You must write your own tests');

// End of tests */
