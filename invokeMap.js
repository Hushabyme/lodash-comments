import baseEach from './.internal/baseEach.js'
import invoke from './invoke.js'
import isArrayLike from './isArrayLike.js'

/**
 * 在 `collection` 中调用每个元素的 `path` 方法，返回每个被调用方法的结果数组
 * 每个被调用的方法都提供了任何其他参数
 * 如果 `path` 是一个函数，它被调用，`this` 绑定到 `collection` 中的每个元素上
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {Array} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * invokeMap([123, 456], String.prototype.split, [''])
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
function invokeMap(collection, path, args) {
  let index = -1
  const isFunc = typeof path == 'function'
  const result = isArrayLike(collection) ? new Array(collection.length) : []

  baseEach(collection, (value) => {
    result[++index] = isFunc ? path.apply(value, args) : invoke(value, path, args)
  })
  return result
}

export default invokeMap
