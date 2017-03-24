/**
 * 检查 `value` 是否为 `undefined`
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 为 `undefined`，否则返回 `false`
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
function isUndefined(value) {
  return value === undefined
}

export default isUndefined
