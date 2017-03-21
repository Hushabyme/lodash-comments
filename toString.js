import arrayMap from './.internal/arrayMap.js'
import isSymbol from './isSymbol.js'

const INFINITY = 1 / 0;

/** 用于将 symbols 转换为基础类型和字符串 */
const symbolProto = Symbol ? Symbol.prototype : undefined;
const symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * 将 `value` 转换为字符串；为 null 和 undefined 值返回一个空字符串；`-0'的符号被保留
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要转换的值
 * @returns {string} 返回转换后的字符串
 *
 */
function toString(value) {
  if (value == null) {
    return '';
  }
  // 提前退出字符串，以避免在某些环境中的性能损失
  if (typeof value == 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    // 递归转换值（易受调用堆栈限制）
    return `${ arrayMap(value, (other) => other == null ? other : toString(other)) }`;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : ''
  }
  const result = `${ value }`;
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

export default toString;
