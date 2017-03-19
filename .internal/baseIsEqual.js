import baseIsEqualDeep from './baseIsEqualDeep.js'
import isObjectLike from '../isObjectLike.js'

/**
 * `isEqual` 方法的基本实现，它支持部分比较和跟踪遍历的对象
 *
 * @private
 * @param {*} value 要比较的值
 * @param {*} other 要比较的其它值
 * @param {boolean} bitmask 位掩码标志
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] 自定义比较的功能
 * @param {Object} [stack] 追踪遍历 `value` 和 `other` 对象
 * @returns {boolean} 如果值相等则返回 `true`，否则返回 `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

export default baseIsEqual;
