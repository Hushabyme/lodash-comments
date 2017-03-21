/* 与其他 `lodash` 方法同名的内置方法引用 */
const nativeCeil = Math.ceil;
const nativeMax = Math.max;

/**
 * `range` 和 `rangeRight` 方法的基本实现，但不强制参数
 *
 * @private
 * @param {number} start 开始的范围
 * @param {number} end 结束的范围
 * @param {number} step 要递增或递减的值
 * @param {boolean} [fromRight] 指定从右到左的迭代
 * @returns {Array} 返回数字的范围
 */
function baseRange(start, end, step, fromRight) {
  let index = -1;
  let length = nativeMax(nativeCeil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step
  }
  return result;
}

export default baseRange;
