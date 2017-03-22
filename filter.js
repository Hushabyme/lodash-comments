import arrayFilter from './.internal/arrayFilter.js'
import baseFilter from './.internal/baseFilter.js'

/**
 * 迭代 `collection` 的元素，返回所有元素的数组 `predicate` 返回 `true`
 * 谓词被调用三个参数:(value，index | key，collection)
 *
 * **注意:** 不像 `remove`, 该方法返回新的数组
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  const func = Array.isArray(collection) ? arrayFilter : baseFilter
  return func(collection, predicate)
}

export default filter
