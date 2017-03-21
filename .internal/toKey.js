import isSymbol from '../isSymbol.js'

/** 用作 `Number` 常量的引用 */
const INFINITY = 1 / 0;

/**
 * 如果不是 string 或 symbol，则将 `value` 转换为字符串 key
 *
 * @private
 * @param {*} value 指定的值
 * @returns {string|symbol} 返回的 key
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  const result = `${ value }`;
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

export default toKey;

/**
*
* Test
*
* */

// 这是 JavaScript 内部的一个特性，可以说不重要，但是记住最好
console.log(1 / 0);  // Infinity
console.log(-1 / 0);  // -Infinity

