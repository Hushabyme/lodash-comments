/**
 *  获取 `array` 的第一个元素
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array 要查询的数组
 * @returns {*} 返回 `array` 的第一个元素
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
function head(array) {
  return (array != null && array.length)
    ? array[0]
    : undefined
}

export default head
