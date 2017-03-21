/**
 * `sortBy` 的基本实现，它使用 `comparer` 来定义 `array` 的排序顺序，并用它们相应的值替换条件对象
 *
 * @private
 * @param {Array} array 要排序的数组
 * @param {Function} comparer 定义排序顺序的函数
 * @returns {Array} 返回的 `array`
 */
function baseSortBy(array, comparer) {
  let { length } = array;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

export default baseSortBy;
