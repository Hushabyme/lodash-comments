import isFlattenable from './isFlattenable.js'

/**
 * `flatten` 方法的基本实现支持限制展开
 *
 * @private
 * @param {Array} array 要展开的数组
 * @param {number} depth 最大递归深度
 * @param {boolean} [predicate=isFlattenable] 每次迭代调用该函数
 * @param {boolean} [isStrict] 通过 `predicate` 检查限制的值
 * @param {Array} [result=[]] 初始化 result 的值
 * @returns {Array} 返回一个被展开的值
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  let index = -1;
  const { length } = array;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    const value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        result.push(...value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

export default baseFlatten;
