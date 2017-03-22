// import baseSlice from './.internal/baseSlice.js'

/**
 * 获取 `array` 的所有元素，最后一个元素除外
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @returns {Array} 返回分割后的 `array`
 * @example
 *
 * initial([1, 2, 3])
 * // => [1, 2]
 */
function initial(array) {
  const length = array == null ? 0 : array.length
  return length ? baseSlice(array, 0, -1) : []
}

// export default initial

/*
*
* 思考：
*
* 看到这个函数，我第一时间就想到了下面的函数写法代替它
*
* */

function initial(array) {
  return array.slice(0, array.length - 1);
}

console.log(initial([1, 2, 3]));  // [1, 2]
