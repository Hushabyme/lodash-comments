import isError from './isError.js'

/**
 * 尝试调用 `func`，返回结果或捕获的错误对象。`func` 在调用时提供任何额外的参数
 *
 * @since 3.0.0
 * @category Util
 * @param {Function} func 尝试的函数
 * @param {...*} [args] 调用`func`的参数
 * @returns {*} 返回 `func` 结果或错误对象
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * const elements = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (isError(elements)) {
 *   elements = []
 * }
 */
function attempt(func, ...args) {
  try {
    return func.apply(undefined, args)
  } catch (e) {
    return isError(e) ? e : new Error(e)
  }
}

export default attempt
