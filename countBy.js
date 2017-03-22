import baseAssignValue from './.internal/baseAssignValue.js'
import reduce from './reduce.js'

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 创建由运行 iteratee 的结果生成的键组成的对象将使用一个参数（值）进行调用
 *
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection 迭代的集合
 * @param {Function} iteratee iteratee转换键
 * @returns {Object} 返回组合的聚合对象
 * @example
 *
 * countBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': 1, '6': 2 }
 */
function countBy(collection, iteratee) {
  return reduce(collection, (result, value, key) => {
    key = iteratee(value)
    if (hasOwnProperty.call(result, key)) {
      ++result[key]
    } else {
      baseAssignValue(result, key, 1)
    }
    return result
  }, {})
}

export default countBy
