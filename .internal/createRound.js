/**
 * 创建一个类似于 `round` 的函数
 *
 * @private
 * @param {string} methodName 舍入时使用的 `Math` 方法的名称
 * @returns {Function} 返回新的 round 函数
 */
function createRound(methodName) {
  const func = Math[methodName];
  return (number, precision) => {
    precision = precision == null ? 0 : Math.min(precision, 292);
    if (precision) {
      // 使用指数符号移动以避免浮点问题
      // See [MDN](https://mdn.io/round#Examples) for more details.
      let pair = `${ number }e`.split('e');
      const value = func(`${ pair[0] }e${ +pair[1] + precision }`)

      pair = `${ value }e`.split('e')
      return +`${ pair[0] }e${ +pair[1] - precision }`
    }
    return func(number)
  }
}

export default createRound
