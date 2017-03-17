/**
 * `some` 用于数组的专门版本
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {Function} predicate 每一次迭代要使用的函数
 * @returns {boolean} 如果任何元素通过 predicate 检查，返回`true`，否则返回 `false`
 *
 */

function arraySome(array, predicate) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

export default arraySome;
