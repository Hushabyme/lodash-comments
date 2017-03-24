import arrayMap from './.internal/arrayMap.js'

/**
 * 创建一个使用它所接受的参数调用 `iteratees` 的函数并返回其结果
 *
 * @since 4.0.0
 * @category Util
 * @param {Function[]} [iteratees=[identity]]
 *  The iteratees to invoke.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = over([Math.max, Math.min])
 *
 * func(1, 2, 3, 4)
 * // => [4, 1]
 */
function over(iteratees) {
  return function(...args) {
    return arrayMap(iteratees, (iteratee) => iteratee.apply(this, args))
  }
}

export default over
