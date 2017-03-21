/**
 * 与 `before` 相反，他的方法创建一个函数，一旦调用 `n` 或更多次，就调用 `func`
 *
 * @since 0.1.0
 * @category Function
 * @param {number} n `func` 被调用之前的次数
 * @param {Function} func 限制的函数
 * @returns {Function} 返回新的限制函数
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}

export default after

