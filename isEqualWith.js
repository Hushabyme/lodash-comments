import baseIsEqual from './.internal/baseIsEqual.js'

/**
 * 这个方法就像 `isEqual`，除了它接受调用来比较值的 `customizer`
 * 如果 `customizer` 返回 `undefined`，那么比较是由方法来处理的
 * `customizer` 被调用最多六个参数: (objValue，othValue [，index | key，object，other，stack])
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要比较的值
 * @param {*} other 要比较的其它值
 * @param {Function} [customizer] 自定义比较函数
 * @returns {boolean} 如果 `value` 相等，则返回 `true`，否则返回 `false`
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value)
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true
 *   }
 * }
 *
 * const array = ['hello', 'goodbye']
 * const other = ['hi', 'goodbye']
 *
 * isEqualWith(array, other, customizer)
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined
  const result = customizer ? customizer(value, other) : undefined
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result
}

export default isEqualWith
