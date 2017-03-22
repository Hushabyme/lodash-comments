/**
 * 检查 `value` 是否大于另一个 `other`
 *
 * @since 3.9.0
 * @category Lang
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean} 如果 `value` 大于 `other`，则返回 `true`，否则返回 `false`
 * @see gte, lt, lte
 * @example
 *
 * gt(3, 1)
 * // => true
 *
 * gt(3, 3)
 * // => false
 *
 * gt(1, 3)
 * // => false
 */
function gt(value, other) {
  if (!(typeof value == 'string' && typeof other == 'string')) {
    value = +value
    other = +other
  }
  return value > other
}

export default gt
