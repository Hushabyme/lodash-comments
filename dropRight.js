import baseSlice from './.internal/baseSlice.js'

/**
 * 创建一个 `array` 的 slice，`n` 个元素从开始
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @param {number} [n=1] 要删除的元素数
 * @returns {Array} 返回删除指定数目后的 `array`
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function dropRight(array, n=1) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return []
  }
  n = length - n
  return baseSlice(array, 0, n < 0 ? 0 : n)
}

export default dropRight

/*
*
* 思考：
*
* 还是刚才的那个问题，从 1 开始太不友好了
*
* */

function fallRight(array, n = 0) {
  const length = array.length;
  return array.slice(0, length - n);
}

console.log(fallRight([1, 2, 3]));  // [1, 2, 3]
console.log(fallRight([1, 2, 3], 1));  // [1, 2]
console.log(fallRight([1, 2, 3], 2));  // [1]

