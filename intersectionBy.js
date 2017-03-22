import arrayMap from './.internal/arrayMap.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'
import last from './last.js'

/**
 * 这个方法就像 `intersection`，除了它接受 `iteratee`，
 * 它为每个 `arrays` 的每个元素调用，以生成与之比较的标准
 * 结果值的顺序和引用由第一个数组确定
 * iteratee被调用一个参数：（value）。
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 */
function intersectionBy(...arrays) {
  let iteratee = last(arrays)
  const mapped = arrayMap(arrays, castArrayLikeObject)

  if (iteratee === last(mapped)) {
    iteratee = undefined
  } else {
    mapped.pop()
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, iteratee)
    : []
}

export default intersectionBy
