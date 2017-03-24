import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'
import nodeUtil from './.internal/nodeUtil.js'

/* Node.js helper references. */
const nodeIsDate = nodeUtil && nodeUtil.isDate

/**
 * 检查 `value` 是否类属于 `Date` 对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是 date 对象则返回 `true`，否则返回 `false`
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */
const isDate = nodeIsDate
  ? (value) => nodeIsDate(value)
  : (value) => isObjectLike(value) && baseGetTag(value) == '[object Date]';

export default isDate
