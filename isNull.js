/**
 * 检查 `value` 是否为 `null`
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 为 `null` 则返回 `true`，否则返回 `false`
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
function isNull(value) {
  return value === null
}

export default isNull
