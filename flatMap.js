import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/**
 * 通过运行 `collection` 到 `iteratee` 中的每个元素并平铺映射的结果来创建一个展开的数组
 * 使用三个参数调用iteratee：（value，index | key，collection）。
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} iteratee 每一次迭代调用的函数
 * @returns {Array} 返回新的展开的数组
 * @see flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [n, n]
 * }
 *
 * flatMap([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1)
}

export default flatMap
