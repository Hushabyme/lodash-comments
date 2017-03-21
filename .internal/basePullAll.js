import arrayMap from './arrayMap.js'
import baseIndexOf from './baseIndexOf.js'
import baseIndexOfWith from './baseIndexOfWith.js'
import copyArray from './copyArray.js'

/** 内置值的引用 */
const splice = Array.prototype.splice;

/**
 * `pullAllBy` 方法的基本实现
 *
 * @private
 * @param {Array} array 要修改的数组
 * @param {Array} values 要移除的值
 * @param {Function} [iteratee] 每个元素调用 iteratee
 * @param {Function} [comparator] 每个元素调用比较器
 * @returns {Array} 返回 `array`
 */
function basePullAll(array, values, iteratee, comparator) {
  const indexOf = comparator ? baseIndexOfWith : baseIndexOf;
  const length = values.length;

  let index = -1;
  let seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, (value) => iteratee(value))
  }
  while (++index < length) {
    let fromIndex = 0
    const value = values[index]
    const computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}

export default basePullAll;
