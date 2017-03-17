/**
 * 这个函数很像 `baseIndexOf` 除了它接受一个比较器
 *
 * @private
 * @param {Array} array 指定的数组
 * @param {*} value 要搜索的值
 * @param {number} fromIndex 要搜索的索引值
 * @param {Function} comparator 比较器调用在每一个元素上
 * @returns {number} 有匹配的值时，返回该索引值，否则返回  `-1`
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  let index = fromIndex - 1;
  const { length } = array;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

export default baseIndexOfWith;
