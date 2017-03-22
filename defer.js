/**
 * 调用 `func` 直到当前调用堆栈清除为止。`func` 在调用时提供任何额外的参数。
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func 延迟的功能
 * @param {...*} [args] 调用 `func` 的参数
 * @returns {number} 返回计时器ID
 * @example
 *
 * defer(text => console.log(text), 'deferred')
 * // => Logs 'deferred' after one millisecond.
 */
function defer(func, ...args) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  return setTimeout(func, 1, ...args)
}

export default defer
