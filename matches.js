import baseClone from './.internal/baseClone.js'
import baseMatches from './.internal/baseMatches.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1

/**
 * 创建一个函数，在给定的对象和 `source` 之间进行局部深度比较
 * 如果给定的对象具有相同的属性值，则返回 `true`，否则为 `false`
 *
 * **注意:** 创建的函数等同于 `isMatch`，`source` 部分应用
 *
 * 部分比较将分别匹配空数组和空对象 `source` 值与任何数组或对象值
 * 有关支持的值比较列表，请参见“isEqual”。
 *
 * @since 3.0.0
 * @category Util
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * const objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ]
 *
 * filter(objects, matches({ 'a': 4, 'c': 6 }))
 * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
 */
function matches(source) {
  return baseMatches(baseClone(source, CLONE_DEEP_FLAG))
}

export default matches
