import baseUnset from './baseUnset.js'
import isIndex from './isIndex.js'

/** 内置值的引用 */
const splice = Array.prototype.splice;

/**
 * `pullAt` 的基本实现，不支持单个索引或捕获删除的元素
 *
 * @private
 * @param {Array} array 要修改的值
 * @param {number[]} indexes 要删除的元素的索引
 * @returns {Array} 返回 `array`
 */
function basePullAt(array, indexes) {
  let length = array ? indexes.length : 0;
  const lastIndex = length - 1;

  while (length--) {
    let previous;
    const index = indexes[length];
    if (length == lastIndex || index !== previous) {
      previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1)
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

export default basePullAt;
