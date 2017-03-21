import arrayMap from './arrayMap.js'
import isSymbol from '../isSymbol.js'

const INFINITY = 1 / 0;

const symbolProto = Symbol ? Symbol.prototype : undefined
const symbolToString = symbolProto ? symbolProto.toString : undefined

/**
 * `toString` 的基本实现不会将 null 值转换为空字符串
 *
 * @private
 * @param {*} value 要处理的 value
 * @returns {string} 返回该字符串
 */
function baseToString(value) {
  // 提前退出字符串，以避免在某些环境中的性能损失
  if (typeof value == 'string') {
    return value
  }
  if (Array.isArray(value)) {
    // 递归转换值（易受调用堆栈限制）
    return `${ arrayMap(value, baseToString) }`
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : ''
  }
  const result = `${ value }`;
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

export default baseToString
