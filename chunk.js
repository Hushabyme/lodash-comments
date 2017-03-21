import baseSlice from './.internal/baseSlice.js'

/**
 * 创建一个元素数组，分成 `size` 的长度。如果 `array` 不能被平均分割，最后的块将是剩余的元素。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要处理的数组
 * @param {number} [size=1] 每个分割的小块的长度
 * @returns {Array} 返回新的数组块
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size))
  }
  return result
}

export default chunk

/*
*
* 思考：
*
* 上面的 baseSlice() 方法就是 Array.prototype.slice() 方法的替代
*
* */
