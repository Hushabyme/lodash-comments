import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_SYMBOLS_FLAG = 4

/**
 * 这个方法就像 `clone`， `customizer`，它被调用来产生克隆的值
 * 如果 `customizer` 返回 `undefined`，克隆是由方法来处理的
 * `customizer` 被最多四个参数调用（value [，index | key，object，stack]）
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要克隆的值
 * @param {Function} [customizer] 自定义克隆的函数
 * @returns {*} 返回克隆后的值
 * @see cloneDeepWith
 * @example
 *
 * function customizer(value) {
 *   if (isElement(value)) {
 *     return value.cloneNode(false)
 *   }
 * }
 *
 * const el = cloneWith(document.body, customizer)
 *
 * console.log(el === document.body)
 * // => false
 * console.log(el.nodeName)
 * // => 'BODY'
 * console.log(el.childNodes.length)
 * // => 0
 */
function cloneWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined
  return baseClone(value, CLONE_SYMBOLS_FLAG, customizer)
}

export default cloneWith
