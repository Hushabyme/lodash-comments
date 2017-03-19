import Stack from './Stack.js'
import baseIsEqual from './baseIsEqual.js'

/** 用于组合位掩码进行值比较 */
const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;

/**
 * `isMatch` 的基本实现
 *
 * @private
 * @param {Object} object 指定的对象
 * @param {Object} source 要匹配的对象属性值
 * @param {Array} matchData 要匹配的属性名称，值和比较标志
 * @param {Function} [customizer] 自定义比较的函数
 * @returns {boolean} 如果 `object` 匹配则返回 `true`，否则返回 `false`
 */
function baseIsMatch(object, source, matchData, customizer) {
  let index = matchData.length;
  const length = index;
  const noCustomizer = !customizer;

  if (object == null) {
    return !length
  }
  let data;
  let result;
  object = Object(object);
  while (index--) {
    data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    const key = data[0];
    const objValue = object[key];
    const srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      const stack = new Stack;
      if (customizer) {
        result = customizer(objValue, srcValue, key, object, source, stack)
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

export default baseIsMatch;
