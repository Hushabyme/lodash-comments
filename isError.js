import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'
import isPlainObject from './isPlainObject.js'

/**
 * 检查是否为 `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, 或者 `URIError` 对象
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value 要检查值
 * @returns {boolean} 如果 `value` 是一个错误对象，返回 `true`，否则为 `false`
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false
  }
  const tag = baseGetTag(value);
  return tag == '[object Error]' || tag == '[object DOMException]' ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value))
}

export default isError
