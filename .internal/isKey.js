import isSymbol from '../isSymbol.js';

/** 用于在属性路径中匹配属性名称 */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/;

/**
 * 检查 `value` 是否是属性名称而不是属性路径
 *
 * @private
 * @param {*} value 要检查的值
 * @param {Object} [object] 要查询的对象
 * @returns {boolean} 如果 `value` 是属性名，返回 `true`，否则为 `false`
 */
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false;
  }
  const type = typeof value;
  if (type == 'number' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

export default isKey;
