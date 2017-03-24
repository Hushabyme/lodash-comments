import baseSum from './.internal/baseSum.js'

/** Used as references for various `Number` constants. */
const NAN = 0 / 0

/**
 * 这个方法就像 `mean`，除了它接受 `iteratee`，它为 `array` 中的每个元素调用，以生成要平均的值
 * iteratee 被调用一个参数：（value）
 *
 * @since 4.7.0
 * @category Math
 * @param {Array} array 要迭代的数组
 * @param {Function} iteratee 每个元素迭代时调用的函数
 * @returns {number} 返回平均值
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * meanBy(objects, ({ n }) => n)
 * // => 5
 */
function meanBy(array, iteratee) {
  const length = array == null ? 0 : array.length
  return length ? (baseSum(array, iteratee) / length) : NAN
}

export default meanBy
