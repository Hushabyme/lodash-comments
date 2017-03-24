import baseKeys from './.internal/baseKeys.js'
import getTag from './.internal/getTag.js'
import isArguments from './isArguments.js'
import isArrayLike from './isArrayLike.js'
import isBuffer from './isBuffer.js'
import isPrototype from './.internal/isPrototype.js'
import isTypedArray from './isTypedArray.js'

/** 用于检查对象的自身属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 检查是否 `value` 为空对象、集合、 map 或者 set
 *
 * 如果对象没有自身的可枚举的字符串 key 属性，则它们被认为是空的
 *
 * 类数组的值有以下形式： `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 为空，则返回 `true`，否则为 `false`
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true
  }
  if (isArrayLike(value) &&
      (Array.isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length
  }
  const tag = getTag(value)
  if (tag == '[object Map]' || tag == '[object Set]') {
    return !value.size
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true
}

export default isEmpty
