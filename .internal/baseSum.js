/**
 *  `sum` 和 `sumBy` 方法的基础实现
 *
 * @private
 * @param {Array} array 要迭代的数组
 * @param {Function} iteratee 每次迭代调用该函数
 * @returns {number} 返回总和
 */
function baseSum(array, iteratee) {
  let result;
  let index = -1;
  const { length } = array;

  while (++index < length) {
    const current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

export default baseSum;
