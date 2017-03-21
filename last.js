/**
 * 获取 `array` 的最后一个元素
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @returns {*} 返回 `array` 的最后一个元素
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
function last(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

export default last;
