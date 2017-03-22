/**
 * 检查 `string` 是否以给定的目标字符串结束.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] 查询的字符串
 * @param {string} [target] 要搜索的字符串
 * @param {number} [position=string.length] 搜索的位置
 * @returns {boolean} 如果 `string` 以 `target` 结尾，否则返回 `true`
 * @see includes, startsWith
 * @example
 *
 * endsWith('abc', 'c')
 * // => true
 *
 * endsWith('abc', 'b')
 * // => false
 *
 * endsWith('abc', 'b', 2)
 * // => true
 */
function endsWith(string, target, position) {
  const { length } = string
  position = position === undefined ? length : +position
  if (position < 0 || position != position) {
    position = 0
  }
  else if (position > length) {
    position = length
  }
  const end = position
  position -= target.length
  return position >= 0 && string.slice(position, end) == target
}

export default endsWith
