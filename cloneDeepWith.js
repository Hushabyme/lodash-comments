import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1
const CLONE_SYMBOLS_FLAG = 4

/**
 * 这个方法就像 `cloneWith`，除了它递归克隆 `value`
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要递归克隆的值
 * @param {Function} [customizer] 自定义克隆的功能
 * @returns {*} 返回深克隆之后的值
 * @see cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (isElement(value)) {
 *     return value.cloneNode(true)
 *   }
 * }
 *
 * const el = cloneDeepWith(document.body, customizer)
 *
 * console.log(el === document.body)
 * // => false
 * console.log(el.nodeName)
 * // => 'BODY'
 * console.log(el.childNodes.length)
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer)
}

export default cloneDeepWith
