import getTag from './.internal/getTag.js'

/**
 * 检查是否 `value` 类属于 `WeakMap` 对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 为 weak map，否则返回 `false`
 * @example
 *
 * isWeakMap(new WeakMap)
 * // => true
 *
 * isWeakMap(new Map)
 * // => false
 */
function isWeakMap(value) {
  return typeof value == 'object' && value != null && getTag(value) == '[object WeakMap]'
}

export default isWeakMap
