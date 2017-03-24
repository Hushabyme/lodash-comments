import before from './before.js'

/**
 * 创建一个限于一次调用 `func` 的函数
 * 对函数的重复调用返回第一次调用的值
 * `func`用被创建的函数的`this`绑定和参数调用
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func 限制的函数
 * @returns {Function} 返回新的限制的函数
 * @example
 *
 * const initialize = once(createApplication)
 * initialize()
 * initialize()
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func)
}

export default once
