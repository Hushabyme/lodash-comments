import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * 检查 `value` 是否属于 boolean 基本类型或者为 object
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 为 boolean 则返回 `true`，否则返回  `false`
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == '[object Boolean]')
}

export default isBoolean
