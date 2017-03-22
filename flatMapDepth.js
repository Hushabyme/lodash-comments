import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/**
 * 这个方法就像 `flatMap`，不同的是它递归地将映射的结果展开到 `depth`
 *
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDepth([1, 2], duplicate, 2)
 * // => [[1, 1], [2, 2]]
 */
function flatMapDepth(collection, iteratee, depth) {
  depth = depth === undefined ? 1 : +depth
  return baseFlatten(map(collection, iteratee), depth)
}

export default flatMapDepth
