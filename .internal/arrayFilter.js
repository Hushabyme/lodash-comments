/**
 * `filter` 对于数组的专门版本
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {Function} predicate 每一次迭代要使用的函数
 * @returns {Array} R返回新的通过筛选的数组
 */

function arrayFilter(array, predicate) {
  let index = -1;
  let resIndex = 0;
  const length = array == null ? 0 : array.length;
  const result = [];

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

export default arrayFilter;
