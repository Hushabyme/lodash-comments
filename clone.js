import baseClone from './.internal/baseClone.js'

/** 用于组合克隆的位掩码 */
const CLONE_SYMBOLS_FLAG = 4;

/**
 * 创建一个 `value` 的浅克隆
 *
 * **注意:** 该方法是基于
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * 并且支持克隆 arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. `arguments` 对象的自己的枚举属性被克隆为纯对象.
 * 为不可克隆的值返回一个空对象作为错误对象，函数，DOM 节点和 WeakMaps
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see cloneDeep
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const shallow = clone(objects)
 * console.log(shallow[0] === objects[0])
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG)
}

export default clone
