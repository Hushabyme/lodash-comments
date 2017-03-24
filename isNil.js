/**
 * 检查是否 `value` 为 `null` 或者为 `undefined`
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 是 nullish，否则返回 `false`
 * @example
 *
 * isNil(null)
 * // => true
 *
 * isNil(void 0)
 * // => true
 *
 * isNil(NaN)
 * // => false
 */
function isNil(value) {
  return value == null
}

export default isNil
