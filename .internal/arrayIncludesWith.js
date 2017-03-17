/**
 * 这个函数就像 `arrayIncludes`，除了它接受一个比较器
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {*} target 要搜索的值
 * @param {Function} comparator 比较器调用每一个参数
 * @returns {boolean} Returns  如果 `target` 被找到则返回 `true`，否则返回 `false`
 */

function arrayIncludesWith(array, value, comparator) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

export default arrayIncludesWith;
