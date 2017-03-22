import baseClone from './.internal/baseClone.js'

const CLONE_DEEP_FLAG = 1
const CLONE_SYMBOLS_FLAG = 4

/**
 * 这个方法就像 `clone`，除了它递归克隆 `value`
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value 要递归克隆的值
 * @returns {*} 返回深克隆之后的值
 * @see clone
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const deep = cloneDeep(objects)
 * console.log(deep[0] === objects[0])
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG)
}

export default cloneDeep
