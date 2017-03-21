import isObject from '../isObject.js'

/**
 * 检查 `value` 适用于严格的相等比较， 例如： `===`
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 符合严格相等返回 `true`，否则返回 `false`
 *
 */

function isStrictComparable(value) {
  return value === value && !isObject(value);
}

export default isStrictComparable;
