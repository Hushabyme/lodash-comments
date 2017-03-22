import baseIsEqual from './.internal/baseIsEqual.js'

/**
 * 执行两个值之间的深度比较，以确定它们是否相等
 *
 * **注意:** 该方法支持比较 arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean} 如果值相等，则返回 `true`，否则返回 `false`
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * isEqual(object, other)
 * // => true
 *
 * object === other
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other)
}

export default isEqual
