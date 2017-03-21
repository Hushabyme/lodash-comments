/**
 * `setToString` 的基本实现，但不支持热循环短路
 *
 * @private
 * @param {Function} func 要修改的函数
 * @param {Function} string `toString` 的结果
 * @returns {Function} 返回 `func`
 */
function baseSetToString(func, string) {
  return Object.defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': () => string,
    'writable': true
  })
}

export default baseSetToString
