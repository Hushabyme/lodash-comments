/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/**
 * 检查 `value` 是合法的 array-like 长度
 *
 * **注释:** 这个方法是基于：
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的 value
 * @returns {boolean} 如果 `value` 是一个合法的长度返回 `true`，否则返回 `false`
 *
 */

function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

export default isLength;

/*
 *
 *   抽象过程：
 *   1. 判断 len 是否为整数
 *   2. 判断 len 是否小于 0，如果小于 0，则使其等于 0
 *   3. 判断 len 是否为 +∞，如果为 +∞，则使其等于 JavaScript 所能准确表示的最大浮点数 2^53 - 1
 *   4. 返回 min(len, 2^53 - 1)
 *
 */

/*
 *
 *   要点：
 *   1. length 是 Number 类型
 *   2. length 是 大于 0 的数
 *   3. length 是 整数，不是小数
 *   4. length 不能大于 2^53 - 1
 *
 */

/**
 *
 * Test
 *
 * */

// 如下是我自己实现的具有相同功能的函数

function isLength1(value) {
  return typeof value === 'number'
    && value >= 0
    && Number.isInteger(value)
    && Number.isSafeInteger(value);
}

// test
console.log(isLength1(1234567890));  // true
console.log(isLength1(-1));  // false
console.log(isLength1(0));  // true
console.log(isLength1(1.2));  // false
console.log(isLength1(Infinity));  // false
