import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/**
 * 这个函数就像 `assignValue`，除了它不赋值 `undefined`
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {string} key 要分配的属性的键
 * @param {*} value 要分配的值
 */

function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

export default assignMergeValue;
