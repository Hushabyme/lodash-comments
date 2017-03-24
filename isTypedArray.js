import getTag from './.internal/getTag.js'
import nodeUtil from './.internal/nodeUtil.js'

/** Used to match `toStringTag` values of typed arrays. */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/

/* Node.js helper references. */
const nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray

/**
 * 检查是否 `value` 类属于 typed array
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 是 typed array，否则返回 `false`
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = nodeIsTypedArray
  ? (value) => nodeIsTypedArray(value)
  : (value) => typeof value == 'object' && value != null && reTypedTag.test(getTag(value))

export default isTypedArray
