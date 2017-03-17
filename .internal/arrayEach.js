/**
 * `forEach` 用于数组的专用版本
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {Function} iteratee 每一次迭代要使用的函数
 * @returns {Array} 返回 `array`
 */
function arrayEach(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEach;
