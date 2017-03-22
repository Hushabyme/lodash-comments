/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 这个方法就像 `invert`，除了反转的对象是从运行 `object` 通过 `iteratee` 的每个元素的结果生成的
 * 每个反转键的对应的反相值是负责产生反转值的键的数组
 * iteratee 被调用一个参数：（value）。
 *
 * @since 4.1.0
 * @category Object
 * @param {Object} object The object to invert.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 1 }
 *
 * invertBy(object, value => `group${ value }`)
 * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
 */
function invertBy(object, iteratee) {
  const result = {}
  Object.keys(object).forEach((value, key) => {
    value = iteratee(value)
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key)
    } else {
      result[value] = [key]
    }
  })
  return result
}

export default invertBy
