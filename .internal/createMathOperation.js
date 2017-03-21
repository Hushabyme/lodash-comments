import baseToNumber from './baseToNumber.js'
import baseToString from './baseToString.js'

/**
 * 创建对两个值执行数学运算的函数
 *
 * @private
 * @param {Function} operator 执行操作的函数
 * @param {number} [defaultValue] 用于 `undefined` 参数的值
 * @returns {Function} 返回新的数学运算函数
 */
function createMathOperation(operator, defaultValue) {
  return (value, other) => {
    let result;
    if (value === undefined && other === undefined) {
      return defaultValue
    }
    if (value !== undefined) {
      result = value
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other
      }
      if (typeof value == 'string' || typeof other == 'string') {
        value = baseToString(value);
        other = baseToString(other);
      } else {
        value = baseToNumber(value);
        other = baseToNumber(other);
      }
      result = operator(value, other);
    }
    return result
  }
}

export default createMathOperation
