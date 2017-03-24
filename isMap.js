import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'
import nodeUtil from './.internal/nodeUtil.js'

/* Node.js helper references. */
const nodeIsMap = nodeUtil && nodeUtil.isMap

/**
 * 检查 `value` 是否类属于 `Map` 对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是 map 则返回 `true`，否则返回 `false`
 * @example
 *
 * isMap(new Map)
 * // => true
 *
 * isMap(new WeakMap)
 * // => false
 */
const isMap = nodeIsMap
  ? (value) => nodeIsMap(value)
  : (value) => isObjectLike(value) && getTag(value) == '[object Map]'

export default isMap
