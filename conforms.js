import baseClone from './.internal/baseClone.js'
import baseConforms from './.internal/baseConforms.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1

/**
 * 创建一个函数，使用给定对象的相应属性值调用`source`的谓词属性，
 * 如果所有谓词都返回真值则返回 `true`，否则返回 `false`
 *
 * **注意:** 创建的函数等价于部分应用了 `source` 的 `conformsTo`
 *
 * @since 4.0.0
 * @category Util
 * @param {Object} source 属性的对象认定是符合的
 * @returns {Function} 返回新的指定的函数
 * @example
 *
 * const objects = [
 *   { 'a': 2, 'b': 1 },
 *   { 'a': 1, 'b': 2 }
 * ]
 *
 * filter(objects, conforms({ 'b': function(n) { return n > 1 } }))
 * // => [{ 'a': 1, 'b': 2 }]
 */
function conforms(source) {
  return baseConforms(baseClone(source, CLONE_DEEP_FLAG))
}

export default conforms
