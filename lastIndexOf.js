import baseFindIndex from './.internal/baseFindIndex.js'
import baseIsNaN from './.internal/baseIsNaN.js'
import strictLastIndexOf from './.internal/strictLastIndexOf.js'

/**
 * 该方法很像 `indexOf` 除了它从右到左迭代 `array` 元素
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 指定的数组
 * @param {*} value 要搜索的值
 * @param {number} [fromIndex=array.length-1] 要搜索的索引
 * @returns {number} 返回匹配值的索引，否则返回 `-1`
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 *
 * // Search from the `fromIndex`.
 * lastIndexOf([1, 2, 1, 2], 2, 2)
 * // => 1
 */
function lastIndexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = length
  if (fromIndex !== undefined) {
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }
  return value === value
    ? strictLastIndexOf(array, value, index)
    : baseFindIndex(array, baseIsNaN, index, true)
}

export default lastIndexOf

/*
*
* 思考：
*
* 现在，我们可以使用 Array.prototype.lastIndexOf() 方法来替代掉这个方法
*
* */
