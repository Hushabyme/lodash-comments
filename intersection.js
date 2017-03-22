import arrayMap from './.internal/arrayMap.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'

/**
 * 创建包含在所有给定数组中的唯一值数组为了等值比较
 * 结果值的顺序和引用由第一个数组确定
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * intersection([2, 1], [2, 3])
 * // => [2]
 */
function intersection(...arrays) {
  const mapped = arrayMap(arrays, castArrayLikeObject)
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : []
}

export default intersection
