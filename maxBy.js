import isSymbol from './isSymbol.js'

/**
 * 这个方法就像 `max`，除了它接受`iteratee`，它为`array`中的每个元素调用，以产生这个值被排列的标准
 * iteratee被调用一个参数：（value）
 *
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * maxBy(objects, ({ n }) => n)
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  let result
  let index = -1
  const length = array == null ? 0 : array.length

  while (++index < length) {
    let computed
    const value = array[index]
    const current = iteratee(value)

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : (current > computed)
        )) {
      computed = current
      result = value
    }
  }
  return result
}

export default maxBy
