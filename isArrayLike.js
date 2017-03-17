import isLength from './isLength.js'

/**
 * 检查 `value` 是否是 array-like
 * 一个值被认为是 array-like 则表示它不是一个函数，并且有一个 "value.length"属性，
 * 且是大于或等于 0 的整数且小于或等于 "Number.MAX_SAFE_INTEGER"
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的 value
 * @returns {boolean} 如果 `value` 是 array-like 则返回 `true`，否则返回 `false`
 *
 */
function isArrayLike(value) {
  return value != null && typeof value != 'function' && isLength(value.length);
}

export default isArrayLike;

/**
*
* Test
*
* */

// 如下是我自己实现的具有相同功能的函数

function isArrayLike1(value) {
  if(value) {
    return typeof value !== 'function' && isLength(value);
  }
}

// test
console.log(isArrayLike1());  // undefined
console.log(isArrayLike1(1));  // true
console.log(isArrayLike1(Infinity));  // false
console.log(isArrayLike1(function(){}));  // false
