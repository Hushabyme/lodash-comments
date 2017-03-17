/**
 * 给 `set` 添加 `value`
 *
 * @private
 * @param {Object} set 要修改的 set
 * @param {*} value 要添加的 value
 * @returns {Object} 返回 `set`.
 */
function addSetEntry(set, value) {
  // 这里没有直接返回 `set.add()` 是因为 IE11 中这样不可链式调用
  set.add(value);
  return set;
}

export default addSetEntry;

// 看看，我们上面的东西这里就用上了，聪明~
