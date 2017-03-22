// import baseIndexOf from './.internal/baseIndexOf.js'

/**
 * 获取在 `array` 中查找到第一次出现 `value` 的索引，用于等式比较
 * 如果 `fromIndex` 是负数，它将被用作 `array` 结尾处的偏移量
 * 参考 [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`.
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = fromIndex == null ? 0 : +fromIndex
  if (index < 0) {
    index = Math.max(length + index, 0)
  }
  return baseIndexOf(array, value, index)
}

// export default indexOf

/*
*
* 思考：
*
* 目前，我们可以使用原生的 indexOf() 来代替？
*
* */

function index(array, value) {
  return array.indexOf(value)
}

console.log(index([1, 2, 3], 2));  // 1

// 可以拓展一下，毕竟别人有一个从某一个索引值开始查找

function index1(array, value, index = 0) {
  return array.indexOf(value, index);
}

const arr = [1, 2, 3, 2, 4];
console.log(index1(arr, 2, 2));  // 3
