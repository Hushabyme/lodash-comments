import arrayEach from './.internal/arrayEach.js'
import baseEach from './.internal/baseEach.js'

/**
 * 迭代 `collection` 的元素，并为每个元素调用 `iteratee`。
 * 使用三个参数调用 iteratee：（value，index | key，collection）
 * Iteratee 函数可以通过明确返回 `false` 来提早退出迭代。
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `forIn`
 * or `forOwn` for object iteration.
 *
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see forEachRight, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEach([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEach : baseEach
  return func(collection, iteratee)
}

export default forEach
