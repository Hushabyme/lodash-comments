/**
 * `every` 对于数组的专门版本
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {Function} predicate 每一次迭代要使用的函数
 * @returns {boolean} 如果所有元素都通过 predicate 检查，则返回 `true`
 *
 */

function arrayEvery(array, predicate) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

export default arrayEvery;
