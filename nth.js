import isIndex from './.internal/isIndex.js'

/**
 * 获取 `array` 的索引 `n` 处的元素
 * 如果 `n` 为负数则从末尾开始返回第 n 个元素
 *
 * @since 4.11.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=0] The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 *
 * nth(array, 1)
 * // => 'b'
 *
 * nth(array, -2)
 * // => 'c'
 */
function nth(array, n) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return
  }
  n += n < 0 ? length : 0
  return isIndex(n, length) ? array[n] : undefined
}

export default nth

/*
*
* 思考：
*
* 这个方法，我们也可以自己解决
*
* 到此，我越来越在想，我们使用 `lodash` 真的是因为它很方便吗？
* 不是，还是那句话，为的是保持一致性
* 不过，我们学了库以后，目的是学习构建思路，最后构建属于自己的库，毕竟自己的才是最顺手的
*
* `lodash` 不过是 `underscore` 的 fork 后的升级版，很多方法也已经落后了，但是这种跨平台的思路我们需要学习
*
* */

const _nth = (array, n) => {
  n = n >= 0 ? n : array.length + n;

  return array[n];
};

console.log(_nth([1, 2, 3], 1));  // 2
console.log(_nth([1, 2, 3, 4, 3], -2));  // 4
