import baseFindIndex from './baseFindIndex.js'
import baseIsNaN from './baseIsNaN.js'
import strictIndexOf from './strictIndexOf.js'

/**
 * `indexOf` 基本实现，但没有 `fromIndex` 检测
 *
 * @private
 * @param {Array} array 指定的数组
 * @param {*} value 要寻找的值
 * @param {number} fromIndex 要寻找的索引值
 * @returns {number} 找到匹配的值时，返回该索引值，否则返回 `-1`
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

export default baseIndexOf;
