import nth from './nth.js'

/**
 * 创建一个函数，获取索引 `n` 上的参数
 * 如果 `n` 为负数，则返回从末尾开始的第 n 个参数
 *
 * @since 4.0.0
 * @category Util
 * @param {number} [n=0] The index of the argument to return.
 * @returns {Function} Returns the new pass-thru function.
 * @example
 *
 * const func = nthArg(1)
 * func('a', 'b', 'c', 'd')
 * // => 'b'
 *
 * const func = nthArg(-2)
 * func('a', 'b', 'c', 'd')
 * // => 'c'
 */
function nthArg(n) {
  return (...args) => nth(args, n)
}

export default nthArg
