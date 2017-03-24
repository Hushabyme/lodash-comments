import baseGetTag from './.internal/baseGetTag.js'
import isObject from './isObject.js'

/**
 * 检查是否 `value` 类属于 `Function` 对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 为 function 则返回 `true`，否则返回 `false`
 * @example
 *
 * isFunction(_)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false
  }
  // `Object＃toString` 的使用避免了 `typeof` 运算符的问题
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = baseGetTag(value)
  return tag == '[object Function]' || tag == '[object AsyncFunction]' ||
    tag == '[object GeneratorFunction]' || tag == '[object Proxy]'
}

export default isFunction
