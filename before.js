/**
 * 创建一个函数，调用 `func`，用 `this` 绑定和创建的函数的参数，而它被称为少于 `n`倍
 * 对创建的函数的后续调用返回最后一个 `func` 调用的结果
 *
 * @since 3.0.0
 * @category Function
 * @param {number} n 不再调用 `func` 的调用数
 * @param {Function} func 限制的函数
 * @returns {Function} 返回新的限制函数
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  let result
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args)
    }
    if (n <= 1) {
      func = undefined
    }
    return result
  }
}

export default before
