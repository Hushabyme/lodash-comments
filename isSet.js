import getTag from './.internal/getTag.js'
import nodeUtil from './.internal/nodeUtil.js'

/* Node.js helper references. */
const nodeIsSet = nodeUtil && nodeUtil.isSet

/**
 * 检查 `value` 是否类属于 `Set` 对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 为 set，否则返回 `false`
 * @example
 *
 * isSet(new Set)
 * // => true
 *
 * isSet(new WeakSet)
 * // => false
 */
const isSet = nodeIsSet
  ? (value) => nodeIsSet(value)
  : (value) => typeof value == 'object' && value != null && getTag(value) == '[object Set]'

export default isSet
