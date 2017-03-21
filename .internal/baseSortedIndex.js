import baseSortedIndexBy from './baseSortedIndexBy.js'
import isSymbol from '../isSymbol.js'

/** 用作数组最大长度和索引的引用 */
const MAX_ARRAY_LENGTH = 4294967295;
const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

/**
 * `sortedIndex` 和 `sortedLastIndex` 的基本实现，它执行 `array` 的二进制搜索以确定 `value` 应该插入 `array` 的索引，以便保持它的排序顺序
 *
 * @private
 * @param {Array} array 要检查的排序数组
 * @param {*} value 要评估的值
 * @param {boolean} [retHighest] 指定返回最高限定索引
 * @returns {number} 返回 `value` 应该插入到 `array` 中的索引
 */
function baseSortedIndex(array, value, retHighest) {
  let low = 0;
  let high = array == null ? low : array.length;

  if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      const mid = (low + high) >>> 1;
      const computed = array[mid];
      if (computed !== null && !isSymbol(computed) &&
          (retHighest ? (computed <= value) : (computed < value))) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return baseSortedIndexBy(array, value, (value) => value, retHighest);
}

export default baseSortedIndex;
