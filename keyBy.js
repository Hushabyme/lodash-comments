import baseAssignValue from './.internal/baseAssignValue.js'
import reduce from './reduce.js'

/**
 * 创建一个由运行 `collection` 到 `iteratee` 的每个元素的结果生成的按键组成的对象
 * 每个密钥的相应值是负责生成密钥的最后一个元素
 * iteratee被调用一个参数：（value）
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @see groupBy, partition
 * @example
 *
 * const array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ]
 *
 * keyBy(array, ({ code }) => String.fromCharCode(code))
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 */
function keyBy(collection, iteratee) {
  return reduce(collection, (result, value, key) => (
    baseAssignValue(result, iteratee(value), value), result
  ), {})
}

export default keyBy
