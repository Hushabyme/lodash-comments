/**
 * `reduce` 用于数组的专门版本
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {Function} iteratee 每一次迭代要使用的函数
 * @param {*} [accumulator] 初始值
 * @param {boolean} [initAccum] 使用 `array` 的第一个元素作为初始值
 * @returns {*} 返回累加后的值
 */

function arrayReduce(array, iteratee, accumulator, initAccum) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

export default arrayReduce;
