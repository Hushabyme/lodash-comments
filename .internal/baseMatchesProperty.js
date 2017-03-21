import baseIsEqual from './baseIsEqual.js'
import get from '../get.js'
import hasIn from '../hasIn.js'
import isKey from './isKey.js'
import isStrictComparable from './isStrictComparable.js'
import matchesStrictComparable from './matchesStrictComparable.js'
import toKey from './toKey.js'

/** 用于组合位掩码进行值比较 */
const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;

/**
 * `matchesProperty`的基本实现，但它不克隆 `srcValue`
 *
 * @private
 * @param {string} path 获取属性的路径
 * @param {*} srcValue 要匹配的值
 * @returns {Function} 返回新的指定的函数
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue)
  }
  return (object) => {
    const objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  }
}

export default baseMatchesProperty;
