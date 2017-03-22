import baseSlice from './.internal/baseSlice.js'

/**
 * 创建一个 `array`，从头开始删除 `n` 个元素
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array 要查询的函数
 * @param {number} [n=1] 要删除的元素数目
 * @returns {Array} 返回删除后的 `array`
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function drop(array, n=1) {
  const length = array == null ? 0 : array.length
  return length
    ? baseSlice(array, n < 0 ? 0 : n, length)
    : []
}

export default drop

/*
*
* 思考：
*
* 这个函数很简单，但是我不明白，为何要默认删除 1 个呢？按照设计原则，删除一个才是应该的不是吗？
* 这不符合使用原则呀？我还是自己实现一个吧。。。
*
* */

function fall(array, n = 0) {
  const length = array.length;
  return array.slice(n, length);
}

console.log(fall([1, 2, 3]));  // [ 1, 2, 3 ]
console.log(fall([1, 2, 3], 1));  // [2, 3]
console.log(fall([1, 2, 3], 2));  // [3]
