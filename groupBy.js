import baseAssignValue from './.internal/baseAssignValue.js'
import reduce from './reduce.js'

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 创建一个由运行 `collection` 到 `iteratee` 的每个元素的结果生成的按键组成的对象
 * 分组值的顺序由它们在 `collection` 中发生的顺序决定
 * 每个 key 的对应值是负责生成密钥的元素数组
 * iteratee被调用一个参数：（value）
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 */
function groupBy(collection, iteratee) {
  return reduce(collection, (result, value, key) => {
    key = iteratee(value)
    if (hasOwnProperty.call(result, key)) {
      result[key].push(value)
    } else {
      baseAssignValue(result, key, [value])
    }
    return result
  }, {})
}

export default groupBy
