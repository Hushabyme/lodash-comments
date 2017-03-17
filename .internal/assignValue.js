import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 如果现有值不相等，则将 `value` 赋给 `object` 的 `key`
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {string} key 要分配的属性的键
 * @param {*} value 要分配的值
 */

function assignValue(object, key, value) {
  const objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

export default assignValue;
