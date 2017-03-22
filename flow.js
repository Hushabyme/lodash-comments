/**
 * 组合一个函数，返回使用已创建函数的 `this` 绑定来调用给定函数的结果，
 * 其中每个连续调用都提供前一个函数的返回值
 *
 * @since 3.0.0
 * @category Util
 * @param {Function[]} [funcs] 调用的函数
 * @returns {Function} 返回新的复合函数
 * @see flowRight
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flow([add, square])
 * addSquare(1, 2)
 * // => 9
 */
function flow(funcs) {
  const length = funcs ? funcs.length : 0
  let index = length
  while (index--) {
    if (typeof funcs[index] != 'function') {
      throw new TypeError('Expected a function')
    }
  }
  return function(...args) {
    let index = 0
    let result = length ? funcs[index].apply(this, args) : args[0]
    while (++index < length) {
      result = funcs[index].call(this, result)
    }
    return result
  }
}

export default flow

/*
*
* 思考：
*
* 这个函数完美的诠释了函数式编程的思想，那就是 "组合"
* 也就是将一个个的小函数组装成大型函数
*
* */
