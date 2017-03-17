/**
 * `forEachRight` 用于数组的专用方法
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {Function} iteratee 每一次迭代要使用的函数
 * @returns {Array} 返回 `array`
 */

function arrayEachRight(array, iteratee) {
  let length = array == null ? 0 : array.length;

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEachRight;
