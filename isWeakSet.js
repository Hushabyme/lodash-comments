import getTag from './.internal/getTag.js'

/**
 * 检查 `value` 是否类属于 `WeakSet`对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 为 weak set，否则返回 `false`
 * @example
 *
 * isWeakSet(new WeakSet)
 * // => true
 *
 * isWeakSet(new Set)
 * // => false
 */
function isWeakSet(value) {
  return typeof value == 'object' && value != null && getTag(value) == '[object WeakSet]'
}

export default isWeakSet
