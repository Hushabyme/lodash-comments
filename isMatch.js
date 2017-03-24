import baseIsMatch from './.internal/baseIsMatch.js'
import getMatchData from './.internal/getMatchData.js'

/**
 * 执行 `object` 和 `source` 之间的局部深入比较，以确定 `object` 是否包含等价的属性值
 *
 * **注意:** 当 `source` 部分应用时，此方法相当于 `matches`
 *
 * 部分比较将分别匹配空数组和空对象 `source` 值与任何数组或对象值
 * 有关支持的值比较列表，请参见 `isEqual`
 *
 * @since 3.0.0
 * @category Lang
 * @param {Object} object 要检查的对象
 * @param {Object} source 属性值的对象匹配
 * @returns {boolean} 如果 `object` 匹配，则返回 `true`，否则为 `false`
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 *
 * isMatch(object, { 'b': 2 })
 * // => true
 *
 * isMatch(object, { 'b': 1 })
 * // => false
 */
function isMatch(object, source) {
  return object === source || baseIsMatch(object, source, getMatchData(source))
}

export default isMatch
