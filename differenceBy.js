import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 这个方法就像 `difference`，除了它接受对 `array` 和 `values` 的每个元素调用的 `iteratee`
 * 以生成与之进行比较的标准。结果值的顺序和引用由第一个数组确定。iteratee被调用一个参数:(value)
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 检查的数组
 * @param {...Array} [values] 要排除的值
 * @param {Function} iteratee 每个元素调用 iteratee
 * @returns {Array} 返回过滤后的新数组
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
function differenceBy(array, ...values) {
  let iteratee = last(values)
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
    : []
}

export default differenceBy
