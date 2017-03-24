import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'
import nodeUtil from './.internal/nodeUtil.js'

/* Node.js helper 引用 */
const nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer

/**
 * 检查 `value` 是否被分类为 `ArrayBuffer` 对象
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean}如果 `value` 是 array buffer 则返回 `true`，否则为 `false`
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 *
 * isArrayBuffer(new Array(2))
 * // => false
 */
const isArrayBuffer = nodeIsArrayBuffer
  ? (value) => nodeIsArrayBuffer(value)
  : (value) => isObjectLike(value) && baseGetTag(value) == '[object ArrayBuffer]'

export default isArrayBuffer
