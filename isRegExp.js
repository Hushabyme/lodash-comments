import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'
import nodeUtil from './.internal/nodeUtil.js'

/* Node.js helper references. */
const nodeIsRegExp = nodeUtil && nodeUtil.isRegExp

/**
 * 检查 `value` 是否类属于 `RegExp` 对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 是 regexp，否则返回 `false`
 * @example
 *
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp('/abc/')
 * // => false
 */
const isRegExp = nodeIsRegExp
  ? (value) => nodeIsRegExp(value)
  : (value) => isObjectLike(value) && baseGetTag(value) == '[object RegExp]'

export default isRegExp
