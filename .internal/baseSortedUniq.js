import eq from '../eq.js'

/**
 * `sortedUniq` 和 `sortedUniqBy` 的基本实现
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {Function} [iteratee] 每个元素调用 iteratee
 * @returns {Array} 返回新的重复自由数组
 */
function baseSortedUniq(array, iteratee) {
  let seen;
  let index = -1;
  let resIndex = 0;

  const { length } = array;
  const result = [];

  while (++index < length) {
    const value = array[index], computed = iteratee ? iteratee(value) : value;
    if (!index || !eq(computed, seen)) {
      seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

export default baseSortedUniq;
