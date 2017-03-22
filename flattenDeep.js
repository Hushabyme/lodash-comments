// import baseFlatten from './.internal/baseFlatten.js'

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/**
 * 递归地展开 `array`
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flatten, flattenDepth
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, INFINITY) : []
}

// export default flattenDeep

/*
*
* 思考：
*
* 现在，我们可以使用 ES6 中的 ... 来代替它
* 并且，现在遍历的深度我们可以自己决定，换句话说，也就是我们可以自己决定是否展开
* 但是，这个展开操作符毕竟还是要考虑兼容性的问题，目前的解决方案是通过 babel 转换
* */

console.log([1, ...[2], ...[3, ...[4]]]);  // [ 1, 2, 3, 4 ]
console.log([1, ...[2], ...[3, [4]]]);  // [ 1, 2, 3 , [4] ]
console.log([1, ...[2], [3, [4]]]);  // [ 1, 2, [ 3, [ 4 ] ] ]
