import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import arrayMap from './arrayMap.js'
import cacheHas from './cacheHas.js'

/** 用于启用大型数组优化 */
const LARGE_ARRAY_SIZE = 200;

/**
 *  `difference` 的基本实现方法，但它不支持排除多个数组的情况
 *
 * @private
 * @param {Array} array 指定的数组
 * @param {Array} values 要排除的值
 * @param {Function} [iteratee] 每一次迭代的元素
 * @param {Function} [comparator] 比较器调用于每一个元素上
 * @returns {Array} 返回新的筛选后的数组
 */
function baseDifference(array, values, iteratee, comparator) {
  let index = -1;
  let includes = arrayIncludes;
  let isCommon = true;
  const { length } = array;
  const result = [];
  const valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, (value) => iteratee(value));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    let value = array[index];
    const computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

export default baseDifference;
