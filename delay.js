/**
 * 在等待几毫秒后调用 `func`。`func`在调用时提供任何额外的参数
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func 延迟调用的函数
 * @param {number} wait 延迟调用的毫秒数
 * @param {...*} [args] 调用`func`的参数
 * @returns {number} 返回计时器ID
 * @example
 *
 * delay(text => console.log(text), 1000, 'later')
 * // => Logs 'later' after one second.
 */
function delay(func, wait, ...args) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  return setTimeout(func, +wait || 0, ...args)
}

export default delay

/*
*
* 思考：
* 为什么有了 `defer` 后还要有一个 `delay` 函数呢？
* 其实我们看到源码后，第一反应是，这两个函数其实没有什么区别的
* 原因应该是将其功能区分开，一个用于延迟操作，一个用于做异步操作
*
* */
