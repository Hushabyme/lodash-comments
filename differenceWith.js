import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 这个方法就像 `difference`，除了它接受 `comparator`
 * 它被调用来比较 `array` 到 `values` 的元素
 * 结果值的顺序和引用由第一个数组确定
 * 比较器被调用两个参数：（arrVal，othVal）
 *
 * **Note:** Unlike `pullAllWith`, this method returns a new array.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的值
 * @param {...Array} [values] 要排除的值
 * @param {Function} [comparator] 每个元素调用比较器
 * @returns {Array} 返回新的过滤值数组
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 *
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)
 * // => [{ 'x': 2, 'y': 1 }]
 */
function differenceWith(array, ...values) {
  let comparator = last(values)
  if (isArrayLikeObject(comparator)) {
    comparator = undefined
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : []
}

export default differenceWith
