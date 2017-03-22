import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * 创建不包含在其他给定数组中的数组的数组用于相等比较
 * 结果值的顺序和引用由第一个数组确定
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 *
 * **注意:** 不像 `pullAll`, 该方法返回一个新的数组
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 检查的函数
 * @param {...Array} [values] 要排除的值
 * @returns {Array} 返回过滤后的新数组
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}

export default difference
