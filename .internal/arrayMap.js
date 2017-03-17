/**
 *  `map` 用于数组的专门版本
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {Function} iteratee 每一次迭代要使用的函数
 * @returns {Array} 返回新的 mapped 数组
 */

function arrayMap(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

export default arrayMap;
