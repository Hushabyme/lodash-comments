import isSymbol from '../isSymbol.js'

/** 用作数组最大长度和索引的引用 */
const MAX_ARRAY_LENGTH = 4294967295;
const MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;

/* 与其他`lodash`方法同名的内置方法引用 */
const nativeFloor = Math.floor, nativeMin = Math.min;

/**
 * `sortedIndexBy` 和 `sortedLastIndexBy` 的基本实现，它为 `value` 调用 `iteratee` 和 `array` 的每个元素来计算它们的排序等级
 * 使用一个参数（值）调用 iteratee
 *
 * @private
 * @param {Array} array 要检查的排序数组
 * @param {*} value 要评估的值
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {boolean} [retHighest] 指定返回最高限定索引
 * @returns {number} 返回 `value` 应该插入到 `array` 中的索引
 */
function baseSortedIndexBy(array, value, iteratee, retHighest) {
  value = iteratee(value);

  let low = 0;
  let high = array == null ? 0 : array.length;
  const valIsNaN = value !== value;
  const valIsNull = value === null;
  const valIsSymbol = isSymbol(value);
  const valIsUndefined = value === undefined;

  while (low < high) {
    let setLow;
    const mid = nativeFloor((low + high) / 2);
    const computed = iteratee(array[mid]);
    const othIsDefined = computed !== undefined;
    const othIsNull = computed === null;
    const othIsReflexive = computed === computed;
    const othIsSymbol = isSymbol(computed);

    if (valIsNaN) {
      setLow = retHighest || othIsReflexive
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined)
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull)
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol)
    } else if (othIsNull || othIsSymbol) {
      setLow = false
    } else {
      setLow = retHighest ? (computed <= value) : (computed < value)
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nativeMin(high, MAX_ARRAY_INDEX);
}

export default baseSortedIndexBy;
