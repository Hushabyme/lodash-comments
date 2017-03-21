import isSymbol from '../isSymbol.js'

/** 用作 `Number` 常量的引用 */
const NAN = 0 / 0;

/**
 * `toNumber` 的基本实现，但不能保证二进制，十六进制或八进制字符串值的正确转换。
 *
 * @private
 * @param {*} value 要处理的值
 * @returns {number} 返回 number
 */
function baseToNumber(value) {
  if (typeof value == 'number') {
    return value
  }
  if (isSymbol(value)) {
    return NAN
  }
  return +value
}

export default baseToNumber;

// 关于这个 +number，相信都明白，就是强制转换为 Number 类型，就和 !! 转换为 Boolean 是一样的
