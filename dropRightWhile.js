import baseWhile from './.internal/baseWhile.js'

/**
 * 创建一个 `array` 的 slice，不包括从末尾删除的元素
 * 元素被删除，直到 `predicate` 返回 falsey
 * 谓词被调用三个参数：（value，index，array）
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @param {Function} predicate 每次迭代调用该函数
 * @returns {Array} 返回被切割后的 `array`
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropRightWhile(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function dropRightWhile(array, predicate) {
  return (array != null && array.length)
    ? baseWhile(array, predicate, true, true)
    : []
}

export default dropRightWhile
