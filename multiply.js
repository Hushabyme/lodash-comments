import createMathOperation from './.internal/createMathOperation.js'

/**
 * 两个数相乘
 *
 * @since 4.7.0
 * @category Math
 * @param {number} multiplier The first number in a multiplication.
 * @param {number} multiplicand The second number in a multiplication.
 * @returns {number} Returns the product.
 * @example
 *
 * multiply(6, 4)
 * // => 24
 */
const multiply = createMathOperation((multiplier, multiplicand) => multiplier * multiplicand, 1)

export default multiply

/*
*
* 思考：
*
* 看到这里，我实在是不知道说什么了。
* 封装方法是很好，但是 API 过多真的是一个好事吗？
*
* */

const multi = (a, b) => a * b;
console.log(multi(4, 5));  // 20
